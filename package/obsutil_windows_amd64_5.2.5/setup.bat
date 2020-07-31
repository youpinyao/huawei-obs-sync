@ECHO OFF
rem Please ensure that this script is in the same directory as obsutil.
TITLE Add obsutil as custom command for Windows.
set linkFile=C:\windows\obsutil.exe
set sourceFile=%~dp0%\obsutil.exe
if exist %linkFile% (
    del C:\windows\obsutil.exe
)
if exist %sourceFile% (
    mklink %linkFile% %~dp0%\obsutil.exe
    echo Successfully! %linkFile%
) else (
    echo Failed:%sourceFile% is not exist!
)
pause