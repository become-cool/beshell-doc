# 运行 JavaScript 脚本文件

BeShell 应用的主要逻辑应该写在 JavaScript 文件中。因此需要 BeShell 完善了 ESP32 的文件系统支持 :page_facing_up: 。

将存储介质 (flash 或 sd卡) 上的文件分区挂载到 BeShell 的文件系统，然后就可以像在其他平台上一样运行 JavaScript 文件。


1. 执行 `BeShell::use<FS>()` 应用文件系统模块。

    > 注意：应用 `FS` 模块需要在执行 `BeShell::setup()` 前。

2. 执行 `FS::mount()` 静态方法，将一个分区挂载到指定的路径。

下面分别给出 Arduino 和 ESP-IDF 的简单例子。

## Arduino 启动工程代码

```cpp
#include <BeShell.hpp>

using namespace be ;

BeShell beshell ;

void setup() {

    // 应用文件系统模块
    beshell.use<FS>() ;

    // 将 flash 中 label 为 ffat 的分区，以 Fat32 格式挂载到根目录
    FS::mount("/", new FatFS("ffat", true)) ;

    // 启动 BeShell
    beshell.setup() ;
}

void loop() {
    beshell.loop() ;
}
```

> FatFS 类构造函数的第二个参数表示如果分区存在，但挂载失败(未初始化的分区)，则自动格式化。

在菜单栏 `工具` -> `开发板: xxx` 子菜单中选择对应的 ESP32 开发板。

![选择对应的ESP32开发板](./screenshot/20240526_150209.png =640x)

在菜单栏 `工具` -> `Partition Scheme: xxx` 子菜单中选择合适的分区方案。

![选择合适的分区方案](./screenshot/20240526_151035.png =640x)

以上图为例，flash 总大小 4MB, APP 程序分区 1.2MB, FatFS 分区 label 为 ffat, 大小 1.5 MB。


## ESP-IDF

```cpp
#include <BeShell.hpp>

using namespace be ;

BeShell beshell ;

void app_main() {

    // 应用文件系统模块
    beshell.use<FS>() ;

    // 将 flash 中 label 为 fsroot 的分区，以 LittleFS 格式挂载到根目录
    FS::mount("/", new LittleFS("fsroot", true)) ;

    // 启动 BeShell
    beshell.setup() ;

    // beshell 主循环
    beshell.run() ;
}
```

ESP-IDF 项目使用分区表文件 `partitions.csv` 来定义 flash 上的分区。BeShell 针对 4MB/8MB/16MB 的 flash 大小，提供了默认的分区方案。对应的分区表文件存放在 BeShell/filesystem 目录下。可以在 `idf.py menuconfig` 配置界面里填入对应的分区表文件路径。例如：`components/BeShell/filesystem/partitions-4MB.csv`

VSCode ESP-IDF 扩展提供了一个 UI 界面在替代 基于命令行的 `idf.py menuconfig` 配置界面。

![在配置界面填入分区表文件路径](./screenshot/20240526_153323.png =640x)

你也可以根据自己的开发板flash大小和需要，修改分区表里的内容。


## 测试文件操作

无论用 Arduino 还是 ESP-IDF，在编译烧录后，都可以用以下方式测试文件系统。

1. 在浏览器中打开 [BeConsole](https://beconsole.become.cool) ，连接esp32开发板。

2. 在终端输入 `ls` 命令回车，查看根目录下的文件列表。返回应该是空的，因为还没有文件。

3. 在根目录下创建一个文件，输入 `touch main.js` 命令，创建一个文件。

4. 输入 `ls` 命令，查看根目录下的文件列表。应该能看到 `main.js` 了文件。

5. 在左侧文件列表中，选择根目录，右键菜单 `刷新` ，文件列表里会出现刚才创建的 `main.js` 文件。

6. 双击 `main.js` 文件，编辑器里会打开 `main.js` 文件。

7. 在编辑器里输入以下内容，然后保存：

    ```javascript
    import {__filename} from 'loader'

    console.log("Greetings from", __filename())
    ```

8. 在终端里输入 `. main.js` 命令，运行 `main.js` 文件，返回结果应该是：

    ```
    Greetings from /main.js
    ```

    > 命令开头的 `.` 表示运行 JavaScript 文件。这和 bash 里的 `.` 命令有些类似，但不同的是不会在命令行变量空间内执行。

    > BeShell 也提供了类似 NodeJS 的 `__filename` 和 `__dirname`，但在 BeShell 中，他们是函数，而不是变量，并且需要从 `loader` 模块导入。

9. 最后一步演示如何从在 app 启动时自动运行 `main.js` 文件。在 cpp 代码里调用：`evalScript()` 方法：

    ::: code-tabs

    @tab Arduino
    ```cpp
    #include <BeShell.hpp>

    using namespace be ;

    BeShell beshell ;

    void setup() {

        // 应用文件系统模块
        beshell.use<FS>() ;

        // 将 flash 中 label 为 ffat 的分区，以 Fat32 格式挂载到根目录
        FS::mount("/", new FatFS("ffat", true)) ;

        // 自动运行 main.js 文件
        beshell.engine->evalScript("/main.js") ;

        // 启动 BeShell
        beshell.setup() ;
    }

    void loop() {
        beshell.loop() ;
    }
    ```
    
    @tab ESP-IDF
    ```cpp
    #include <BeShell.hpp>

    using namespace be ;

    BeShell beshell ;

    #ifdef __cplusplus
    extern "C" {
    #endif

    void app_main() {

        // 应用文件系统模块
        beshell.use<FS>() ;

        // 将 flash 中 label 为 fsroot 的分区，以 LittleFS 格式挂载到根目录
        FS::mount("/", new LittleFS("fsroot", true)) ;

        // 启动 BeShell
        beshell.setup() ;

        // 自动运行 main.js 文件
        beshell.engine->evalScript("/main.js") ;

        // beshell 主循环
        beshell.run() ;
    }
    
    #ifdef __cplusplus
    }
    #endif
    ```