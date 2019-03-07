package main

import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

func sumStringChars(stringNum string, runningTotal int64) int64 {
	if len(stringNum) == 0 {
		return runningTotal
	}
	firstChar := string(stringNum[0])
	parsedNum, err := strconv.ParseInt(firstChar, 0, 64) // can probably parse int directly from byte
	if err == nil {
		return sumStringChars(stringNum[1:], runningTotal+parsedNum)
	}
	return -1 // should probably return (int64, error)
}

func main() {
	num := math.Pow(2, 1000)
	strNum := strings.Replace(fmt.Sprintf("%f", num), ".", "", -1) // can't parse decimal point!
	fmt.Println(sumStringChars(strNum, 0))
}
