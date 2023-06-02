// Hamming Distance : number of positions at which the symbols are different.


// version 1 : with instanciate new object from the function constructor.

function hammingDistance() {
    let stringx = "";
    let stringy = "";
    this.addStrings = function () {
        do {
            stringx = prompt("Type String x : ");
            stringy = prompt("Type string y : ");
        } while (!stringx || !stringy || stringx.length !== stringy.length);
    }

    this.showStrings = function () {
        return [stringx, stringy];
    }

    this.Hamming = function () {
        if (!stringx || !stringy) {
            return this.addStrings()
        }
        const width = stringy.length > stringx.length ? stringy.length : stringx.length;
        let count = 0;
        for (let i = 0; i < width; i++) {
            if (stringx[i] !== stringy[i]) {
                count++;
            }
        };
        console.log(`The Hamming distance between : ${stringx} and ${stringy} is ${count}`);
    }
}

const newHammingInstance = new hammingDistance();
newHammingInstance.addStrings();
newHammingInstance

// version 2 : when you call HammingDistanceV2() it will execute evrything and return the result.

function hammingDistanceV2() {
    let stringx = "";
    let stringy = "";

    do {
        stringx = prompt("Type String x : ");
        stringy = prompt("Type string y : ");
    } while (!stringx || !stringy || stringx.length !== stringy.length);

    const width = stringy.length > stringx.length ? stringy.length : stringx.length;
    let count = 0;
    for (let i = 0; i < width; i++) {
        if (stringx[i] !== stringy[i]) {
            count++;
        }
    };
    return console.log(`The Hamming distance between : ${stringx} and ${stringy} is ${count}`);
}

hammingDistanceV2();


// Palindrome Check

function Palindrome(string) {
    let TesterArray = string.split("");
    let test = true;
    while (TesterArray.length > 1 && test) {
        firstElem = TesterArray.shift();
        lastElem = TesterArray.pop();
        if (firstElem !== lastElem) {
            test = false;
        }
    }
    if (test) {
        return `${string} is a Palindrome`;
    } else {
        return `${string} is a not Palindrome`;
    }
}

// Longest Common Substring Problem.

function LongestCommonSubstring(string1, string2) {
    const MatrixT = Array(string1.length + 1).fill(0).map(() => Array(string2.length + 1).fill(0));
    max = 0;
    index = [];
    for (let i = 1; i <= string1.length; i++) {
        for (let j = 1; j <= string2.length; j++) {
            if (string1[i - 1] === string2[j - 1]) {
                MatrixT[i][j] = MatrixT[i - 1][j - 1] + 1;
                if (max < MatrixT[i][j]) {
                    max = MatrixT[i][j];
                    index = [i, j];
                }
            }
        }
    }
    Substring = "";
    while (MatrixT[index[0]][index[1]] !== 0) {
        Substring = string1[index[0] - 1] + Substring;
        index = [index[0] - 1, index[1] - 1];
    }
    console.log(`Longest Common Substring is : ${Substring} with length (${max})`);
}


// Levenshtein Distance:

/*    sunday
     0123456
    s1000000
    a2000000
    t3000000
    u4000000
    e5000000
    d6000000
    a7000000
    y8000000
*/

function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    const distances = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        distances[i] = new Array(n + 1);
    }

    for (let i = 0; i <= m; i++) {
        distances[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
        distances[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                distances[i][j] = distances[i - 1][j - 1];
            } else {
                distances[i][j] = Math.min(
                    distances[i - 1][j] + 1,
                    distances[i][j - 1] + 1,
                    distances[i - 1][j - 1] + 1
                );
            }
        }
    }

    return distances[m][n];
}