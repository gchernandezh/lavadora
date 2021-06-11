input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(10000)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # . .
        # . . . .
        # # # # #
        `)
    basic.pause(20000)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(10000)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(10000)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # . .
        # . . . .
        # # # # #
        `)
    basic.pause(20000)
    basic.clearScreen()
})
