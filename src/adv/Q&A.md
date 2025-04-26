# 常见问题

## 主循环


beshell 的主循环函数 `BeShell::run()` 会在每次循环结束时调用 `vTaskDelay(1)` 延迟 1 tick。esp idf 默认一个 1 tick 为 10ms。这导致 setTimeout/setInterval 的最小间隔时间不会小于 10ms。

如果需要更好的实时性，可以尝试两种方式：

1. 在 `idf.py menuconfig` 中修改 tick 的时间，改为 1ms ，但这样 setTimeout/setInterval 依然有1ms左右的额外延迟。

2. 不使用 `BeShell::run()` , 另写一个循环

```
while(1) {
    beshell.loop() ;
}
```

如果遇到一下报错，就通过 `idf.py menuconfig` 关闭 `Watch CPU0 Idle Task` 或 `Watch CPU1 Idle Task` 选项即可。

```
E (66119) task_wdt: Task watchdog got triggered. The following tasks/users did not reset the watchdog in time:
E (66119) task_wdt:  - IDLE0 (CPU 0)
E (66119) task_wdt: Tasks currently running:
E (66119) task_wdt: CPU 0: main
E (66119) task_wdt: CPU 1: task-usb
E (66119) task_wdt: Print CPU 0 (current core) backtrace


Backtrace: 0x420C283E:0x3FC99F90 0x420C2C60:0x3FC99FB0 0x40377049:0x3FC99FE0 0x40380ED6:0x3FCA8EE0 0x4200CC2A:0x3FCA8F20 0x42011116:0x3FCA8F90 0x420101B4:0x3FCA8FC0 0x420101D9:0x3FCA8FF0 0x4200ACB4:0x3FCA9010 0x42116D9B:0x3FCA9050 0x40381179:0x3FCA9080
0x420c283e: task_wdt_timeout_handling at D:/lib/esp-idf/v5.1.4/components/esp_system/task_wdt/task_wdt.c:489 (discriminator 3)
0x420c2c60: task_wdt_isr at D:/lib/esp-idf/v5.1.4/components/esp_system/task_wdt/task_wdt.c:565
0x40377049: _xt_lowint1 at D:/lib/esp-idf/v5.1.4/components/freertos/FreeRTOS-Kernel/portable/xtensa/xtensa_vectors.S:1240
0x40380ed6: xQueueReceive at D:/lib/esp-idf/v5.1.4/components/freertos/FreeRTOS-Kernel/queue.c:1571
0x4200cc2a: KeyMouseInput::loop(JSContext*) at D:/project/kvm/soft/kvm-firmware/main/KeyMouseInput.cpp:436
0x42011116: be::JSEngine::loop() at D:/project/kvm/soft/kvm-firmware/components/BeShell/src/JSEngine.cpp:154
0x420101b4: be::BeShell::loop() at D:/project/kvm/soft/kvm-firmware/components/BeShell/src/BeShell.cpp:89
0x420101d9: be::BeShell::run() at D:/project/kvm/soft/kvm-firmware/components/BeShell/src/BeShell.cpp:102 (discriminator 1)
0x4200acb4: app_main at D:/project/kvm/soft/kvm-firmware/main/main.cpp:44
0x42116d9b: main_task at D:/lib/esp-idf/v5.1.4/components/freertos/app_startup.c:208 (discriminator 13)
0x40381179: vPortTaskWrapper at D:/lib/esp-idf/v5.1.4/components/freertos/FreeRTOS-Kernel/portable/xtensa/port.c:162
```
