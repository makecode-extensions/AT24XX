/**
 * makecode AT24CXX EEPROM Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

/**
 * AT24CXX block
 */
//% weight=100 color=#303030 icon="\uf2db" block="AT24CXX"
namespace AT24CXX {
    let AT24_I2C_ADDR = 80;

    /**
     * write a byte to special address
     * @param addr eeprom address, eg: 1
     * @param dat is the data will be write, eg: 5
     */
    //% blockId="AT24_WriteByte" block="eeprom address %addr|write byte %dat"
    //% weight=100 blockGap=8
    export function write_byte(addr: number, dat: number): void {
        let buf = pins.createBuffer(3);
        buf[0] = addr >> 8;
        buf[1] = addr;
        buf[2] = dat;
        pins.i2cWriteBuffer(AT24_I2C_ADDR, buf)
    }

    /**
     * read a byte from special address
     * @param addr eeprom address, eg: 1
     */
    //% blockId="AT24_ReadByte" block="read byte from address %addr"
    //% weight=99 blockGap=8
    export function read_byte(addr: number): number {
        pins.i2cWriteNumber(AT24_I2C_ADDR, addr, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(AT24_I2C_ADDR, NumberFormat.UInt8BE);
    }

    /**
     * write a word to special address
     * @param addr eeprom address, eg: 2
     * @param dat is the data will be write, eg: 6
     */
    //% blockId="AT24_WriteWord" block="eeprom address %addr|write word %dat"
    //% weight=90 blockGap=8
    export function write_word(addr: number, dat: number): void {
        let buf = pins.createBuffer(4);
        buf[0] = addr >> 8;
        buf[1] = addr;
        buf[2] = dat >> 8;
        buf[3] = dat;
        pins.i2cWriteBuffer(AT24_I2C_ADDR, buf)
    }

    /**
     * read a word from special address
     * @param addr eeprom address, eg: 2
     */
    //% blockId="AT24_ReadWord" block="read word from address %addr"
    //% weight=89 blockGap=8
    export function read_word(addr: number): number {
        pins.i2cWriteNumber(AT24_I2C_ADDR, addr, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(AT24_I2C_ADDR, NumberFormat.UInt16BE);
    }

    /**
     * write a dword to special address
     * @param addr eeprom address, eg: 4
     * @param dat is the data will be write, eg: 7
     */
    //% blockId="AT24_WriteDWord" block="eeprom address %addr|write dword %dat"
    //% weight=80 blockGap=8
    export function write_dword(addr: number, dat: number): void {
        let buf = pins.createBuffer(6);
        buf[0] = addr >> 8;
        buf[1] = addr;
        buf[2] = dat >> 24;
        buf[3] = dat >> 16;
        buf[4] = dat >> 8;
        buf[5] = dat;
        pins.i2cWriteBuffer(AT24_I2C_ADDR, buf)
    }

    /**
     * read a dword from special address
     * @param addr eeprom address, eg: 4
     */
    //% blockId="AT24_ReadDWord" block="read dword from address %addr"
    //% weight=79 blockGap=8
    export function read_dword(addr: number): number {
        pins.i2cWriteNumber(AT24_I2C_ADDR, addr, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(AT24_I2C_ADDR, NumberFormat.Int32BE);
    }
}