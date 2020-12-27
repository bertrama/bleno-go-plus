# bdaddr

Copied from: [security.stackexchange.com](https://security.stackexchange.com/questions/100443/security-of-bluetooth-low-energy-ble-link-layer-encryption)

With small changes to the gcc line because order of arguments matters now?  When did that happen?

[The tool bdaddr is the primary implementation of this technique.](https://github.com/balle/bluediving/blob/master/tools/bdaddr.c)

```
gcc bdaddr.c -obdaddr -lbluetooth
hciconfig hci0
sudo bdaddr -i hci0 <new bdaddr>
(asks to reset device now)
sudo bccmd -d hci0 warmreset
(check that it changed)
hciconfig hci0
sudo hcitool cc <bdaddr of target to repair to>
sudo hcitool enc <bdaddr target again> enable
```
To return back to a clean slate
```
sudo bccmd -d hci0 coldreset
hciconfig hci0
```
