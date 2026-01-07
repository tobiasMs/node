// Perbedaan Penggunaan Var, Let, Const

// 1. Penggunaan Var
// a. Kalau ada function dengan var di dalemnya, dengan update variable, variable nya ga berubah. 
    var namaa ; 
    namaa = 'tobias';
    function nama(){
    namaa = 'asep';
    }
    console.log(namaa);

// b. Kalau ada variable yang berbeda/ tidak dipanggil maka error
    var namab ; 
    namab = 'tobias';
    function nama(){
        namab = 'asep';
    }
    // console.log(umur); // ReferenceError: umur is not defined

// c. Var bisa update value asalkan ada diluar function    
    var namac ; 
    namac = 'tobias';
    namac = 'asep';
    function nama(){
    namac = 'udin';
    }
    nama();
    console.log(namac); // asep

// d. Pemanggilan log sebelum var.
    console.log(namad) //undefined
    var namad = 'tobias';

// e. Pemanggilan log sebelum var 2.
    var namae;
    console.log(namae); //undefined
    namae = 'tobias'; 