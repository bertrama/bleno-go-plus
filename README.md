# Bleno Go+

An implementation of [PGPemu](https://github.com/yohanes/pgpemu) in bleno.

From Bleno:
```
Linux

* Kernel version 3.6 or above
* libbluetooth-dev
* bluetoothd disabled, if BlueZ 5.14 or later is installed. Use sudo hciconfig hci0 up to power Bluetooth adapter up after stopping or disabling bluetoothd.
    * System V:
        * sudo service bluetooth stop (once)
        * sudo update-rc.d bluetooth remove (persist on reboot)
    * systemd
        * sudo systemctl stop bluetooth (once)
        * sudo systemctl disable bluetooth (persist on reboot)
```

From PGPemu:

> Note that this is unsable without a MAC address, BLOB, and device key.
>
> Please read:
>
> [http://tinyhack.com/2018/11/21/reverse-engineering-pokemon-go-plus/](http://tinyhack.com/2018/11/21/reverse-engineering-pokemon-go-plus/)

See [bleno#Prerequisites](https://github.com/noble/bleno#prerequisites) for dependencies.

# Additional notes

* Some bleno dependencies don't compile in node 11+.
* Use `bdaddr` in `tools` to change your mac if your card supports it.

```
npm install
npm run start
```
