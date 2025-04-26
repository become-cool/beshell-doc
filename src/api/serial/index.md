---
headerDepth: 2
---

# 模块: serial

导入 `serial` 模块：

::: code-tabs

@tab 在.js文件中

```javascript
import * as wifi from 'serial'
```

@tab 在REPL命令行下

```javascript
import serial
```

:::


串口外设类：

* [UART](UART.md)

* [I2C](I2C.md)

* [SPI](SPI.md)

* [I2S](I2S.md)

这些类不需要实例化，serial 模块会根据芯片的类型，自动初始化并导出串口类对象。

不同型号的 ESP32 芯片，所提供的硬件串口外设数量不一样。

|           | UART | I2C | SPI | I2S |
| -----     | ----- | ----- | ----- | ----- | 
|  ESP32    |  3 |  2 |  4 |  1 |
|  ESP32 S2 |  2 |  2 |  4 |  1 |
|  ESP32 S3 |  3 |  2 |  4 |  1 |
|  ESP32 C2 |  2 |  1 |  3 |  x |
|  ESP32 C3 |  2 |  1 |  3 |  1 |
|  ESP32 C6 |  2 |  1 |  2 |  1 |
|  ESP32 H2 |  2 |  2 |  3 |  1 |

例如对于 `ESP32 S3`，serial 模块会导出：

```typescript
{
    uart0: UART,
    uart1: UART,
    uart2: UART,

    i2c0: I2C,
    i2c1: I2C,

    spi2: SPI,
    spi3: SPI,
    spi4: SPI,

    i2s0: I2S,
    i2s1: I2S,
}
```

> 注意：`spi0` 用于内部 flash / psram , 所以没有导出。




