let item = 0
input.onButtonPressed(Button.B, () => {
    item = AT24CXX.read_dword(1)
    serial.writeValue("x", item)
    basic.showIcon(IconNames.Diamond)
})
input.onButtonPressed(Button.A, () => {
    AT24CXX.write_dword(1, item)
    serial.writeValue("x", item)
    basic.showIcon(IconNames.Heart)
})
item = 0
basic.forever(() => {
    item += 1
    item = item % 10
    basic.showNumber(item)
})
