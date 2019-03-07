package main

import "fmt"

func isEven(a int) bool { return a%2 == 0 }

func next(num int) int {
	if isEven(num) {
		return num / 2
	} else {
		return 3*num + 1
	}
}

func walk(num, count int) int {
	if num == 1 {
		return count
	}
	return walk(next(num), count+1)
}

func main() {
	const LIMIT = 1000000
	type Record struct{ startingNum, count int }
	record := &Record{-1, -1}

	for i := 1; i < LIMIT; i++ {
		count := walk(i, 0)
		if count > record.count {
			record.startingNum = i
			record.count = count
		}
	}
	fmt.Printf("%+v\n", *record)
}
