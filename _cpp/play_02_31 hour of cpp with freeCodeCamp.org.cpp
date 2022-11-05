// play_02_31 hour of cpp with freeCodeCamp.org.cpp : Ce fichier contient la fonction 'main'. L'exécution du programme commence et se termine à cet endroit.
//https://youtu.be/8jLOx1hD3_o - freecodecamp 31 - coursDescamp -- https://github.com/rutura/The-C-20-Masterclass-Source-Code
//https://www.youtube.com/watch?v=GQp1zzTwrIg - codeBeauty

/**

    Some elegants aspects of modern Cpp

*/
#include <iostream>
using namespace std;
/*
    ERRORS : Compiler, runtime, warning - errors types

*/
int addNumbers(int first_number, int second_number) {
    int sum = first_number + second_number;
    return sum;
}

int main()
{
    //14 Lambda functions
    /*  auto func = []() {return 1;}; func()
        auto result = [](double a, double b){
            cout<<"a+b "<<(a+b)<<endl;
            return (a+b);
        }(12.1,5.7);
    */
    //Capturing by value
    /*
     int c{42};

     auto func = [c](){
         std::cout << "Inner value : " << c << " &inner : " <<&c <<  std::endl;
     };

     for(size_t i{} ; i < 5 ;++i){
         std::cout << "Outer value : " << c << " &outer : " << &c << std::endl;
         func();
         ++c;
     }
     */
     //Capture everything by value
     /*
      int c{42};

      auto func = [=](){
          std::cout << "Inner value : " << c << std::endl;
      };

      for(size_t i{} ; i < 5 ;++i){
          std::cout << "Outer value : " << c << std::endl;
          func();
          ++c;
      }
      */
    //5 operation on datas - 04.11.22
    /* https://en.cppreference.com/w/cpp/language/operator_precedence 
       use (), value /=3,
    */
    //2 outputs
    /* std::cout, cin, cerr, clog */
    std::string name;int age; std::cin >> name >> age;

    //1 functions.statements
    cout << "1----------" << endl;
    int first_number{ 3 }; // statement
    int second_number{ 7 };

    std::cout << "FN" << first_number << std::endl;
    cout << "SN" << second_number << endl;
    int sum = first_number + second_number;
    cout << "sum: " << sum << endl;
    cout << addNumbers(1, 2) << endl;

    //0
    std::cout << "Hello World!\n";
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
