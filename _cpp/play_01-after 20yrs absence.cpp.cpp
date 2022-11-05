// play_01-after 20yrs absence.cpp.cpp : Ce fichier contient la fonction 'main'. L'exécution du programme commence et se termine à cet endroit.
// https://youtu.be/1v_4dL8l8pQ

/**

    The CPP basics to remember for

*/
#include <iostream>
using namespace std;

enum EyeColor {Brown, Blue, Green,Gray, Other};
float sum(float a, float b);
void introduceMe(string name, int age=0);
void celebrateBirthday(int age);

class Car {
private:
    // todo
public:
    string Name;
    string Color;
    double Price;

    Car(string name, string color, double price) {
        Name = name;
        Color = color;
        Price = price;
    }
    void getInfo() {
        cout << Name << " " << Color << " " << Price << endl;
    }
    void move() {
        cout << Name << " is driving" << endl;
    }

};

class FlyingCar :public Car { // heritage
public:
    FlyingCar(string name, string color, double price):Car(name,color,price) {

    }
    void move() {
        cout << Name << " is flying" << endl;
    }
};
int main()
{
    FlyingCar flCar("SkyFury", "Black", 50000);
    flCar.getInfo();
    Car myCar("Test", "red",20000);
    //myCar.Name = "Ford";
    //cout << myCar.Name << endl;
    
    Car* car1 = &flCar; // transtypage
    car1->move();

    //
    int myAge = 25;
    cout << "Before function " << myAge << endl;
    celebrateBirthday(myAge);
    cout << "After function, age:" << myAge << endl;

    //
    cout<<sum(2.2, 5)<<endl;
    introduceMe("Sal", 23);
    //
    string animals[5] = { "cat", "dog", "cow", "goat", "bee" };
    for (int i = 0; i < animals->length(); i++) {
        cout << animals[i] << endl;
    }
    //
    cout << "WHILE:\n";
    int counter = 1;
    while (counter <= 10) {
        cout << counter << endl;
        counter++;
    }

    cout << "DOWHILE:\n";
    do {
        cout << counter << endl;
        counter++;

    } while (counter <= 100);


    //
    EyeColor eyeColor = Brown;

    switch (eyeColor) {
    case Brown:cout << "80% of ppl hve Brown eyes."; break;
    case Blue:cout << "10% of ppl hve Blue eyes."; break;
    default:cout << "not valid"; break;
    }

    int age = 15;
    age = 26;
    float weight = 65.5;
    double balance = 12345.67;
    char gender = 'f';
    string username = "CodeBrauty";
    string colors[5] = { "red","green", "pink", "blue", "black"};
    cout << colors[0];
    cin >> colors[0]; cout << colors[0];

    bool isTodaySunny = false;
    bool isTodayWeekend = false;
    /*if (isTodaySunny && isTodayWeekend) {
        cout << "go to the park" << endl;
    }
    else if (isTodaySunny && !isTodayWeekend) {
        cout << "go to the park, but take the upbrella" << endl;

    } else {
        cout << "Go to work" << endl;
    }*/
    if (isTodayWeekend) {
        if (isTodaySunny)
            cout << "Go to the park" << endl;
        else
            cout << "Go to the park, but take an umbrella" << endl;
    }
    else {
        cout << "Go to work" << endl;
    }
    std::cout << "Hello World!\n";
    // ? : works too


    system("pause>0");
}
void celebrateBirthday(int age) {
    age++;
    cout << "Yeee, celebrated " << age << ". birthday" << endl;
}
float sum(float a, float b) {
    return a + b;
}

void introduceMe(string name, int age) {
    cout << "My name is " << name << endl;
    cout << "I am " << age << " years old" << endl;
}
// Exécuter le programme : Ctrl+F5 ou menu Déboguer > Exécuter sans débogage
// Déboguer le programme : F5 ou menu Déboguer > Démarrer le débogage

// Astuces pour bien démarrer : 
//   1. Utilisez la fenêtre Explorateur de solutions pour ajouter des fichiers et les gérer.
//   2. Utilisez la fenêtre Team Explorer pour vous connecter au contrôle de code source.
//   3. Utilisez la fenêtre Sortie pour voir la sortie de la génération et d'autres messages.
//   4. Utilisez la fenêtre Liste d'erreurs pour voir les erreurs.
//   5. Accédez à Projet > Ajouter un nouvel élément pour créer des fichiers de code, ou à Projet > Ajouter un élément existant pour ajouter des fichiers de code existants au projet.
//   6. Pour rouvrir ce projet plus tard, accédez à Fichier > Ouvrir > Projet et sélectionnez le fichier .sln.
