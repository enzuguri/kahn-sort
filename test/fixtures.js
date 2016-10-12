module.exports = {
    "acyclic graphs": {
        "simple sorted correctly": {
            /*(read downwards)
            6  3
            |  |
            5->2
            |  |
            4  1
            */
            input: [
                ["3", '2'],
                ["2", "1"],
                ["6", "5"],
                ["5", "2"],
                ["5", "4"]
            ],
            output: [ '3','6','5','2','1','4' ]
        },
        "triangular sorted correctly": {
            /*
            a-> b
            |  /
            c<-
            */
            input: [
                ['a', 'b'],
                ['a', 'c'],
                ['b', 'c']
            ],
            output: ['a', 'b', 'c']
        }
    },
    "cyclic graphs": {
        "simple should throw an exception": {
            /*
            foo<->bar
            */
            input: [
                ["foo", 'bar'],
                ["bar", "foo"] // cyclic dependecy
            ],
            output: Error
        },
        "complex should throw an exception": {
            /*
            foo
            |
            bar<-john
            |     ^
            ron->tom
            */
            input: [
                ["foo", 'bar'],
                ["bar", "ron"],
                ["john", "bar"],
                ["tom", "john"],
                ["ron", "tom"] // cyclic dependecy
            ],
            output: Error
        }
    }
}
