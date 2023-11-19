@echo off
setlocal enabledelayedexpansion

set "duration=720"

set "interval=10"

set /a "totalDuration=!duration! * !interval!"

for /l %%i in (1, 1, %totalDuration%) do (
    echo Simulating cursor movement...
    nircmd.exe movecursor 1 1
    timeout /nobreak %interval%
)

echo Done.
