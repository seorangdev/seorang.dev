+++
title = "PowerShell Scripting Cheatsheet"
description = "An occasionally updated cheatsheet that I found useful along the way"
date = 2022-03-14
draft = false
+++

## How to
### Create a variable (a way to store data)
```ps1
$string = "value"
$int = 42
$float = 3.14
$collection = @("one", "two", "three")
```

### Iterate a collection
```ps1
# Method 1:
Foreach ($item in $collection) {
    # do something
}

# Method 2:
# note: $_ holds the value of current iteration
$collection | ForEach-Object { $_ }
```

### Print something to screen
```ps1
Write-Output $var
```

### Append something to an existing variable
```ps1
$greet = "My Name is..."
$greet += "Hizzely!"
```

### Get the working directory for current script
```ps1
$PsScriptRoot
```

### Execute command stored in a variable
```ps1
Invoke-Expression $var
```

## Tips
### Single Quote vs Double Quote
Single Quote is a verbatim string, it will be used as it is. Double Quote is an expandable string, it will replace any variable name with dollar sign ($) with it's actual value. [Reference](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_quoting_rules).
```ps1
$to = "Mom"
$greet = "Hello, ${to}!"
```