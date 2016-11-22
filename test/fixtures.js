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
            output: [ '6','5','3','2','4','1' ]
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
        },
        "multiple roots layered correctly": {
            /*
            Making a trifle and a cup of tea
            whipped cream,
            custard,
            jam
            ---
            milk,
            water,
            tea
             */
            input: [
                ['whipped cream', 'custard'],
                ['custard', 'jam'],
                ['milk', 'water'],
                ['water', 'tea']
            ],
            output: ['milk', 'whipped cream', 'water', 'custard', 'tea', 'jam']
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
