# KoboldCpp Model Switcher UI

**Requires a server plugin to function! Install it from here: [SillyTavern-KoboldModelSwitcher-Server](https://github.com/SillyTavern/SillyTavern-KoboldModelSwitcher-Server)**

Tested with server plugin version 0.2+ on Linux.
Backward-incompatible versions of server plugin will have version 0.3 and up.

## Configuration

Plugin is using template approach similar to `Image Generation` extension.

Before starting any model template must be created in settings.

#### Start/stop switch

Start selected template or stops running one. Is not interactable while model is loading/stopping.

#### Create

Create button creates new template with prompted name.

#### Edit

Edit will open template edit menu allowing to set up:

- Model name (`--model`) - dropdown with GGUF models in server-configured `basePath`.
- Context size (`--contextsize`) - size of allocated context [ 256 to 262144 ].
- GPU Layers (`--gpulayers`) - number of layers offloaded to GPU.
- Threads (`--threads`) - number of used threads.
- Tensor split (`--tensor_split`) - space-separated list, ratio to split tensors across multiple GPUs.

#### Duplicate

Duplicates existing template configuration with prompted name.

#### Delete

Removes selected template.

### !! Default flags notice !!

As of version 0.2 current server version has following default arguments passed to KoboldCpp:

- `--quiet`
- `--flashattention`
- `--usemlock`
- `--usecublas all`

This will stay at least until version 0.3 for backward compatibility.

## Slash commands

Supports following slash commands:

- `/kobold-start -name "Existing template"` - starting KoboldCpp with given existing template.

## License

AGPLv3
