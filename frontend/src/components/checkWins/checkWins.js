const winCard = {
    pash:{
        one : (arr) =>{
            let sum = 0
            arr.forEach(i => {
                console.log(i , sum)
                if (i == 1){
                    sum += 1
                }
            });
            return sum 
        },two : (arr) =>{
            let sum = 0
            arr.forEach(i => {
                console.log(i , sum)
                if (i == 2){
                    sum += 1
                }
            });
            return sum 
        },three : (arr) =>{
            let sum = 0
            arr.forEach(i => {
                console.log(i , sum)
                if (i == 3){
                    sum += 1
                }
            });
            return sum 
        },four : (arr) =>{
            let sum = 0
            arr.forEach(i => {
                console.log(i , sum)
                if (i == 4){
                    sum += 1
                }
            });
            return sum 
        },five : (arr) =>{
            let sum = 0
            arr.forEach(i => {
                console.log(i , sum)
                if (i == 5){
                    sum += 1
                }
            });
            return sum 
        },six : (arr) =>{
            let sum = 0
            arr.forEach(i => {
                console.log(i , sum)
                if (i == 6){
                    sum += 1
                }
            });
            return sum 
        },bonus : (arr) =>{
            let sum = 0
            arr.forEach((i)=>{sum += i})
            if (sum >= 63){
                return true
            }
        }, nettoPoints: (arr) => {
            let sum = 0
            arr.forEach((i)=>{sum += i})
            return sum
        }
    }, bigPoints: {
        threeOfAKind: (arr) =>{
            let sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] 
            let win = false
            arr.forEach((i)=>{
                let counter = 0
                arr.forEach((i2)=>{
                    if(i==i2){
                        counter += 1
                    }
                if (counter >= 3){
                    win = true
                }
                })
            })
            if (win == true){
                return sum
            }else return 0
        },fourOfAKind: (arr) =>{
            let sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] 
            let win = false
            arr.forEach((i)=>{
                let counter = 0
                arr.forEach((i2)=>{
                    if(i==i2){
                        counter += 1
                    }
                if (counter >= 4){
                    win = true
                }
                })
            })
            if (win == true){
                return sum
            }else return 0
        },fullHouse: (arr) =>{
            let pash = false
            let tripple = false
            arr.forEach((i)=>{
                let counter = 0
                arr.forEach((i2)=>{
                    if(i==i2){
                        counter += 1
                    }
                
                }
                )
                if (counter == 3){
                    tripple = true
                }
                if ( counter == 2){
                    pash = true
                }
            })
            if (pash && tripple){
                return 25
            }else return 0
        },lilStreet: (arr)=>{
            let array = [...arr]
            array.sort()
            if (array == [1,2,3,4] || array == [2,3,4,5] || array == [3,4,5,6] ){return 30}
            else {return 0}
        },bigStreet: (arr)=>{
            let array = [...arr]
            array.sort()
            console.log(array)
            console.log([1,2,3,4,5])
            if (array[0]<array && array[1] < array[2]&& array[3] < array[4])
            if (array == [1,2,3,4,5] || array == [2,3,4,5,6]){return 40}
            else {return 0}
        },kniffel: (arr)=>{
            let win = false
            arr.forEach((i)=>{
                let counter = 0
                arr.forEach((i2)=>{
                    if(i==i2){
                        counter += 1
                    }
                if (counter == 5){
                    win = true
                }
                })
            if (win) {return 50}
            else {return 0}
            })
        },chance: (arr)=>{
            return arr[0] + arr[1] + arr[2] + arr[3] + arr[4] 
        }
    }
}

export default winCard