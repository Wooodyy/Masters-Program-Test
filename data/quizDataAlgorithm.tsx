const quizDataAlgorithm = [
  {
    question: "(ЦИКЛ-ДЕЙІН) қайталау алгоритмі",
    answers: [
      { text: "do-while", isCorrect: true },
      { text: "switch", isCorrect: false },
      { text: "if", isCorrect: false },
      { text: "while", isCorrect: false },
      { text: "for", isCorrect: false }
    ]
  },
  {
    question: "Бірлік таңдау құрылымы",
    answers: [
      { text: "if", isCorrect: true },
      { text: "while-do", isCorrect: false },
      { text: "if-else", isCorrect: false },
      { text: "do-while", isCorrect: false },
      { text: "case", isCorrect: false }
    ]
  },
  {
    question: "C++ тілінде бағдарламаның негізгі бөлігі келтірілген. Нәтижесінде экранға шығатын жауап\nint x=5,d;\nwhile(x>0)\n{d=5*x-4;\nx--;}\ncout<<d;",
    answers: [
      { text: "1", isCorrect: true },
      { text: "16", isCorrect: false },
      { text: "6", isCorrect: false },
      { text: "11", isCorrect: false },
      { text: "-4", isCorrect: false }
    ]
  },
  {
    question: "ЖӘНЕ логикалық операторы",
    answers: [
      { text: "&&", isCorrect: true },
      { text: ">", isCorrect: false },
      { text: "%", isCorrect: false },
      { text: ">=", isCorrect: false },
      { text: "++", isCorrect: false }
    ]
  },
  {
    question: "Салыстыру операторы",
    answers: [
      { text: "==", isCorrect: true },
      { text: "++", isCorrect: false },
      { text: "+", isCorrect: false },
      { text: "%", isCorrect: false },
      { text: "=", isCorrect: false }
    ]
  },
  {
    question: "Нұсқаушылар үшін негізгі операция",
    answers: [
      { text: "меншіктеу", isCorrect: true },
      { text: "конкатенация", isCorrect: false },
      { text: "импликация", isCorrect: false },
      { text: "бөлу", isCorrect: false },
      { text: "қиылысу", isCorrect: false }
    ]
  },
  {
    question: "ceil(9.2) және ceil(-9.8) функцияларына сәйкес мәндер",
    answers: [
      { text: "10.0 және -9.0", isCorrect: true },
      { text: "10.0 және 9.0", isCorrect: false },
      { text: "-9.0 және 10.0", isCorrect: false },
      { text: "9.0 және 10.0", isCorrect: false },
      { text: "9.0 және -10.0", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі қайталау операторлары",
    answers: [
      { text: "for, while", isCorrect: true },
      { text: "break", isCorrect: false },
      { text: "goto", isCorrect: false },
      { text: "if, else", isCorrect: false },
      { text: "switch", isCorrect: false }
    ]
  },
  {
    question: "Берілген NxN матрицаның бас диагоналындағы элементтерді экранға шығаратын алгоритмнің негізгі фрагменті",
    answers: [
      { text: "for ( i = 0; i < N; i++ ) cout<<A[i][i];", isCorrect: true },
      { text: "for ( i = 0; i < N; i++ ) for ( j = 0; j < N; j++ ) cout<<A[j][i];", isCorrect: false },
      { text: "for ( i = 0; i < N; i++ ) cout<<A[10][10];", isCorrect: false },
      { text: "for ( i = 1; i <= N; i++ ) cout<<A[i][i];", isCorrect: false },
      { text: "for ( i = 0; i < N; i++ ) for ( j = 0; j < N; j++ ) cout<<A[i][j];", isCorrect: false }
    ]
  },
  {
    question: "ceil(x) математикалық функциясының анықтамасы",
    answers: [
      { text: "x-тен үлкен емес ең үлкен бүтініне дейін жуықталуын қайтару функциясы", isCorrect: true },
      { text: "x-тің абсолютті мәнін қайтару функциясы", isCorrect: false },
      { text: "x-тен кіші емес ең кіші бүтініне дейін жуықталуын қайтару функциясы", isCorrect: false },
      { text: "x-тің квадратын қайтару функциясы", isCorrect: false },
      { text: "x-тің квадраттық түбірін қайтару функциясы", isCorrect: false }
    ]
  },
  {
    question: "f(n)=n функцияларының дұрыс берілуі",
    answers: [
      { text: "f(0)=0, f(n)=f(n - 1) +1", isCorrect: true },
      { text: "f(0)=1, f(n)=f(n - 1) +1", isCorrect: false },
      { text: "f(0)=1, f(n)=2n*f(n - 1)", isCorrect: false },
      { text: "f(0)=0, f(n)=f(n - 2) +1", isCorrect: false },
      { text: "f(0)=1, f(n)=n*f(n - 1)", isCorrect: false }
    ]
  },
  {
    question: "Келесі бағдарлама орындалғанда S айнымалысының дұрыс мәні void sum(int a[], int S)\n{for(int i = 1; i < 3; ++i)\n S += a[i];}\nint main()\n{  int a[3] = {5, 6, 7};\n    int S = 0;\n    sum(a, S);\n    cout << S;\n    return 0;}",
    answers: [
      { text: "0", isCorrect: true },
      { text: "13", isCorrect: false },
      { text: "18", isCorrect: false },
      { text: "11", isCorrect: false },
      { text: "20", isCorrect: false }
    ]
  },
  {
    question: "Ішкі жолдарды іздеу алгоритмінің бірі",
    answers: [
      { text: "Рабин - Карп алгоритмі", isCorrect: true },
      { text: "Дейкстра алгоритмі", isCorrect: false },
      { text: "Шелл алгоритмі", isCorrect: false },
      { text: "Евклид алгоритмі", isCorrect: false },
      { text: "Форд алгоритмі", isCorrect: false }
    ]
  },
  {
    question: "n элементтен тұратын массивтегі сызықтық іздеу кезіндегі орташа жағдайдағы салыстырулар саны",
    answers: [
      { text: "n/2", isCorrect: true },
      { text: "n - 1", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "log n", isCorrect: false },
      { text: "n", isCorrect: false }
    ]
  },
  {
    question: "2 3 1 7 7 8 9 1 4 6 9 2 3 1 18 тізбегі үшін табиғи біріктіріп сұрыптаудың үшінші этапы",
    answers: [
      { text: "b=1 2 2 3 3 4 6 7 8 9 9 17 c=1 18 a= 1 1 2 2 3 3 4 6 7 8 9 9 17 18", isCorrect: true },
      { text: "b=2 3 7 8 9 17 1 18 c=1 2 3 4 6 9 1 18 a=2 3 7 8 9 17 1 2 3 4 6 9 1 18", isCorrect: false },
      { text: "b=2 3 1 7 7 4 6 9 1 18 c= 1 8 9 2 3 a=1 2 2 3 3 4 6 7 8 9 9 17 1 18", isCorrect: false },
      { text: "b=1 2 2 3 3 4 6 7 8 9 9 17 c=18 1 a=1 18 2 2 3 3 4 6 7 8 9 9 17 1", isCorrect: false },
      { text: "b=2 3 1 7 7 4 6 9 1 18 c=7 8 9 2 3 a=2 3 1 7 7 4 6 9 1 18 7 8 9 2 3", isCorrect: false }
    ]
  },
  {
    question: "Алгоритмдердің күрделілігін асимптоталық талдаудағы дұрыс анықталған",
    answers: [
      { text: "Ω-күрделіліктің төменгі бағасы", isCorrect: true },
      { text: "Ω-күрделіліктің жоғарғы бағасы", isCorrect: false },
      { text: "O-күрделіліктің төменгі бағасы", isCorrect: false },
      { text: "Θ-күрделіліктің жоғарғы бағасы", isCorrect: false },
      { text: "Ω-күрделіліктің нақты бағасы", isCorrect: false }
    ]
  },
  {
    question: "Бүтін санның тақ-жұптығын табу алгоритмінің жұмыс істеу уақыты",
    answers: [
      { text: "O(1)", isCorrect: true },
      { text: "O(n²)", isCorrect: false },
      { text: "O(n² log n)", isCorrect: false },
      { text: "O(n)", isCorrect: false },
      { text: "O(log n)", isCorrect: false }
    ]
  },
  {
    question: "Қарапайым екі матрицаны көбейту алгоритмінің уақыттық күрделілігі",
    answers: [
      { text: "O(n³)", isCorrect: true },
      { text: "O(log n)", isCorrect: false },
      { text: "O(n²)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
      { text: "O(n!)", isCorrect: false }
    ]
  },
  {
    question: "Массивтің дұрыс анықтамасы",
    answers: [
      { text: "бірдей типті реттелген деректердің жиынтығы", isCorrect: true },
      { text: "LIFO принципі бойынша ұйымдастырылған деректердің жиынтығы", isCorrect: false },
      { text: "әртүрлі типті шексіз деректердің жиынтығы", isCorrect: false },
      { text: "әртүрлі типті реттелген деректердің жиынтығы", isCorrect: false },
      { text: "FIFO принципі бойынша ұйымдастырылған деректердің жиынтығы", isCorrect: false }
    ]
  },
  {
    question: "Әр түйінде алдыңғы және келесі түйінге көрсеткіштері бар және соңғы түйін бірінші түйінге ал бірінші түйін соңғы түйінге көрсеткіштері бар тізімнің атауы",
    answers: [
      { text: "қос байланыстырылған циклдік тізім", isCorrect: true },
      { text: "байланыстырылмаған циклдік тізім", isCorrect: false },
      { text: "бір байланыстырылған циклдік тізім", isCorrect: false },
      { text: "бір байланыстырылған сызықтық тізім", isCorrect: false },
      { text: "қос байланыстырылған сызықтық тізім", isCorrect: false }
    ]
  },
  {
    question: "Кезек әдістеріне жатпайтын функция",
    answers: [
      { text: "push_front()", isCorrect: true },
      { text: "pop()", isCorrect: false },
      { text: "empty()", isCorrect: false },
      { text: "back()", isCorrect: false },
      { text: "front()", isCorrect: false }
    ]
  },
  {
    question: "Екінші ретті топтасу пайда болатын себеп",
    answers: [
      { text: "бірнеше кілт бір позицияға хештеледі", isCorrect: true },
      { text: "хэш-функция идеалды емес", isCorrect: false },
      { text: "хеш-кестеге бірдей кілтпен өте көп элемент салынады", isCorrect: false },
      { text: "қолданылатын жылжу тізбегі әрдайым бірдей", isCorrect: false },
      { text: "хэш-функция дұрыс емес", isCorrect: false }
    ]
  },
  {
    question: "Тізбектер әдісінің жұмыс істеу принципі",
    answers: [
      { text: "бірдей хэшi бар элементтер байланысқан тізім ретінде бір ұяшыққа енеді", isCorrect: true },
      { text: "кілтті басқа хэш функциясымен қайта хэштейді", isCorrect: false },
      { text: "тізбекті түрде бос ұяшықтарды іздейді", isCorrect: false },
      { text: "кілті бар элементтер стек ретінде бір ұяшыққа енеді", isCorrect: false },
      { text: "үлкен қашықтықта орналасқан ұяшықтарды тексереді", isCorrect: false }
    ]
  },
  {
    question: "Хештеу кезіндегі коллизиядан құтылу әдісінің бірі",
    answers: [
      { text: "тізбектер әдісі", isCorrect: true },
      { text: "квадраттық бөлшектеу әдісі", isCorrect: false },
      { text: "орамдар әдісі", isCorrect: false },
      { text: "квадрат ортасы әдісі", isCorrect: false },
      { text: "қадамдық бөлшектеу әдісі", isCorrect: false }
    ]
  },
  {
    question: "Екілік ағаштағы іздеудің өшіру операциясы",
    answers: [
      { text: "REMOVE", isCorrect: true },
      { text: "ADD", isCorrect: false },
      { text: "LEFT", isCorrect: false },
      { text: "ODD", isCorrect: false },
      { text: "RIGHT", isCorrect: false }
    ]
  },
  {
    question: "Графтар теориясы бойынша орман дегеніміз",
    answers: [
      { text: "ағаштар жиыны", isCorrect: true },
      { text: "тек циклден тұратын графтар жиыны", isCorrect: false },
      { text: "байланысқан, циклдері бар графтар жиыны", isCorrect: false },
      { text: "қабырғалар саны төбелер санынан көп граф", isCorrect: false },
      { text: "бір түйінінен басқа түйініне тікелей жол жоқ графтар жиыны", isCorrect: false }
    ]
  },
  {
    question: "AVL ағашының дұрыс анықтамасы",
    answers: [
      { text: "биіктігі бойынша теңдестірілген екілік іздеу ағашы", isCorrect: true },
      { text: "түйіндері қара немесе қызыл түске боялған ағаш", isCorrect: false },
      { text: "әр шыңында екіден көп емес ұрпағы бар реттелген тамыр ағашы", isCorrect: false },
      { text: "әр түйіннен екі-үш бұтақ шығуы мүмкін және барлық жапырақтардың тереңдігі бірдей", isCorrect: false },
      { text: "шыңдар дәрежесі N+1-ден аспайтын ағаш", isCorrect: false }
    ]
  },
  {
    question: "Графтағы түйіндерді қосатын сызықтарының атауы",
    answers: [
      { text: "қабырға", isCorrect: true },
      { text: "мекенжай", isCorrect: false },
      { text: "төбе", isCorrect: false },
      { text: "жол", isCorrect: false },
      { text: "нүкте", isCorrect: false }
    ]
  },
  {
    question: "Ағаш бұл",
    answers: [
      { text: "циклсіз байланыспаған граф", isCorrect: true },
      { text: "байланыспаған граф", isCorrect: false },
      { text: "циклсіз граф", isCorrect: false },
      { text: "байланысқан граф", isCorrect: false },
      { text: "графтың ішкі графы", isCorrect: false }
    ]
  },
  {
    question: "Өлшенген бағдарда қабырғаға сәйкес сан қойылады, ол",
    answers: [
      { text: "салмақ деп аталады", isCorrect: true },
      { text: "дәреже деп аталады", isCorrect: false },
      { text: "қашықтық деп аталады", isCorrect: false },
      { text: "өлшемділік деп аталады", isCorrect: false },
      { text: "өлшем деп аталады", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі енгізу және шығаруда қолданылатын стандартты операторлары",
    answers: [
      { text: "cin, cout", isCorrect: true },
      { text: "endl, main", isCorrect: false },
      { text: "include, int", isCorrect: false },
      { text: "main, include", isCorrect: false },
      { text: "endl, return", isCorrect: false }
    ]
  },
  {
    question: "Функцияның сипаттамасына кіреді",
    answers: [
      { text: "атауы мен формальді параметрлер", isCorrect: true },
      { text: "тек символдар", isCorrect: false },
      { text: "атауы мен процедуралар", isCorrect: false },
      { text: "тек нақты сандар", isCorrect: false },
      { text: "аргументтер мен бүтін сандар", isCorrect: false }
    ]
  },
  {
    question: "C++ тілінде функция ешбір мән қайтармайтынын көрсететін қайтарылатын мән типінің атауы",
    answers: [
      { text: "void", isCorrect: true },
      { text: "cin", isCorrect: false },
      { text: "return", isCorrect: false },
      { text: "main", isCorrect: false },
      { text: "cout", isCorrect: false }
    ]
  },
  {
    question: "Бағдарламаның басында мұқият терілген функция класынан хеш-функцияның кездейсоқ таңдалуы туралы",
    answers: [
      { text: "universal hashing", isCorrect: true },
      { text: "multiplication method", isCorrect: false },
      { text: "null hashing", isCorrect: false },
      { text: "successor hashing", isCorrect: false },
      { text: "modular hashing", isCorrect: false }
    ]
  },
  {
    question: "Тірек (қак ағаштың күшін есептеу амалы",
    answers: [
      { text: "қосындысы", isCorrect: true },
      { text: "көбейтіндісі", isCorrect: false },
      { text: "бөліндісі", isCorrect: false },
      { text: "дәрежеленуі", isCorrect: false },
      { text: "логарифмі", isCorrect: false }
    ]
  },
  {
    question: "Алгоритмнің экспоненциалды күрделілігі",
    answers: [
      { text: "O(2ⁿ)", isCorrect: true },
      { text: "O(", isCorrect: false },
      { text: "O(n²)", isCorrect: false },
      { text: "O(2log)", isCorrect: false },
      { text: "O(log10)", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі бағдарлама фрагментінің негізгі басқару құрылымы қандай?\ncout << \"Enter your name and age:\";\nstring name;\nint age;\ncin >> name >> age;\nif (age < 0) {\n    cerr << \"Invalid age entered\";}\nelse {\n    cout << \"\\n\" << name << \" is \" << age;\n}",
    answers: [
      { text: "шартты цикл", isCorrect: true },
      { text: "тармақталған", isCorrect: false },
      { text: "сызықты", isCorrect: false },
      { text: "тізімдер", isCorrect: false },
      { text: "байланысқан тізім", isCorrect: false }
    ]
  },
  {
    question: "Бағдарламалау кезінде екі өлшемді массивтің элементтері арқылы өту үшін жиі қолданылатын басқару құрылымы қандай?",
    answers: [
      { text: "кірістірілген цикл", isCorrect: true },
      { text: "жаһандық айнымалы", isCorrect: false },
      { text: "жергілікті айнымалы", isCorrect: false },
      { text: "ішкі бағдарламалар", isCorrect: false },
      { text: "кірістірілген функция", isCorrect: false }
    ]
  },
  {
    question: "Он бүтін сан арқылы жарияланатын статикалық деректер (жұмыс жасау барысында өлшемі өзгермейтін) құрылымы",
    answers: [
      { text: "массив", isCorrect: true },
      { text: "ағаш", isCorrect: false },
      { text: "граф", isCorrect: false },
      { text: "сөздік", isCorrect: false },
      { text: "кортеж", isCorrect: false }
    ]
  },
  {
    question: "Объект мүшелерінің функциясын шақыру үшін қолданылатын оператор",
    answers: [
      { text: "бағыттаушы (->)", isCorrect: true },
      { text: "конструктор ()", isCorrect: false },
      { text: "жылжытушы (>>)", isCorrect: false },
      { text: "нұсқаушы (*)", isCorrect: false },
      { text: "деструктор (~)", isCorrect: false }
    ]
  },
  {
    question: "Есептегі тұрақтыны анықтау",
    answers: [
      { text: "π", isCorrect: true },
      { text: "S", isCorrect: false },
      { text: "R²", isCorrect: false },
      { text: "L", isCorrect: false },
      { text: "d", isCorrect: false }
    ]
  },
  {
    question: "Бұл іздеу алгоритмі массивтегі барлық элементтерді тізбекті түрде берілген мәнмен сәйкестігін тексереді, және біріншісі сәйкесті табылғанша іздеуді тоқтатады",
    answers: [
      { text: "тізбекті", isCorrect: true },
      { text: "тармақталу", isCorrect: false },
      { text: "үйінді", isCorrect: false },
      { text: "екілік", isCorrect: false },
      { text: "файлдық", isCorrect: false }
    ]
  },
  {
    question: "Хеш-функцияның мәнін атайық: хеш, хеш-мәні немесе...",
    answers: [
      { text: "хеш-код", isCorrect: true },
      { text: "соқтығыс", isCorrect: false },
      { text: "бағдарлама коды", isCorrect: false },
      { text: "тізбект әдісі", isCorrect: false },
      { text: "адрестеу әдісі", isCorrect: false }
    ]
  },
  {
    question: "Шектеулерге тәуелсіз, олар әр түрлі әдіспен енуге болатын, динамикалық сызықты құрылым. Бұл құрылым ішіндегі элементтерге басқа біріншісі элементтердің адресі арқылы сақтай алады.",
    answers: [
      { text: "байланысқан тізім", isCorrect: true },
      { text: "байланыспаған тізім", isCorrect: false },
      { text: "көпөлшемді массив", isCorrect: false },
      { text: "бірөлшемді массив", isCorrect: false },
      { text: "сақиналы кезек", isCorrect: false }
    ]
  },
  {
    question: "Бинарлық ағашты тура және кері айналып өту компьютерлерінде арифметикалық және математикалық өрнектерді жазуға қолданылатын жағдай",
    answers: [
      { text: "жақшалармен", isCorrect: true },
      { text: "айнымалымен", isCorrect: false },
      { text: "константамен", isCorrect: false },
      { text: "айнымалысыз", isCorrect: false },
      { text: "жақшасыз", isCorrect: false }
    ]
  },
  {
    question: "Тізбек әдісі негізінде хеш-кестедегі DELETE(T[0..m−1], key) операциясының есептеу күрделілігі орташа жағдайда болады",
    answers: [
      { text: "O(1 + n/m)", isCorrect: true },
      { text: "O(n)", isCorrect: false },
      { text: "Θ(m)", isCorrect: false },
      { text: "Θ(m + n)", isCorrect: false },
      { text: "O(1)", isCorrect: false }
    ]
  },
  {
    question: "f(n)=6n³ + 24n² + n + 77 функциясын есептеу алгоритм күрделілігі",
    answers: [
      { text: "O(n³)", isCorrect: true },
      { text: "O(n log³ n)", isCorrect: false },
      { text: "O(n²)", isCorrect: false },
      { text: "O(log n³)", isCorrect: false },
      { text: "O(log² n)", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі бағдарлама кодында жұлдызшалар орнында қалып қойған бір жол\n#include <iostream>\nusing namespace std;\nunsigned long factorial(unsigned long number) {\n    if (number <= 1)\n        return 1;\n    else\n        return number * factorial(number - 1);\n}\nint main() {\n    for (int i = 0; i <= 10; i++) {\n        cout << i << \"! = \" << factorial(i) << endl;\n    }\n    return 0;\n}",
    answers: [
      { text: "unsigned long factorial (unsigned long number)", isCorrect: true },
      { text: "char factorial (unsigned long number)", isCorrect: false },
      { text: "str factorial (unsigned long number)", isCorrect: false },
      { text: "void factorial (unsigned long number)", isCorrect: false },
      { text: "unsigned long factorial (float number)", isCorrect: false }
    ]
  },
  {
    question: "Стекте қолданылатын операциялар",
    answers: [
      { text: "сақтау және ақпаратты алып шығу", isCorrect: true },
      { text: "элементтерді екі жақтан қосу", isCorrect: false },
      { text: "элементтерді кері тәртіпте орналастыру", isCorrect: false },
      { text: "элементтерді екі жақты орналастыру", isCorrect: false },
      { text: "элементтерді тізбегімен көру", isCorrect: false }
    ]
  },
  {
    question: "Қызыл-қара теңестірілген ағаштың жапырақтарының (NIL) түсі",
    answers: [
      { text: "қара", isCorrect: true },
      { text: "ақшыл", isCorrect: false },
      { text: "сары", isCorrect: false },
      { text: "көкшіл", isCorrect: false },
      { text: "қызыл", isCorrect: false }
    ]
  },
  {
    question: "Қарапайым таңдаумен сұрыптау әдісінде n * (n-1)/2 салыстырулар саны қажет. Осы әдістің ең нашар жағдайындағы уақытын орындалу күрделілігі қандай?",
    answers: [
      { text: "O(n²)", isCorrect: true },
      { text: "O(n log2)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
      { text: "O(log² n)", isCorrect: false },
      { text: "O(n³)", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі бағдарлама фрагментінің нәтижесінде экранға 10x10 өлшемді массивтің элементтері шығару\nfor (int row = 0; row < 10; row++) {\n    for (int col = 0; col < 10; col++) {\n        if (row >= col) {\n            cout << a[row][col];\n        }\n    }\n}",
    answers: [
      { text: "бас диагональдан төмен орналасқан", isCorrect: true },
      { text: "бас диагональ", isCorrect: false },
      { text: "қосымша диагональ", isCorrect: false },
      { text: "қосымша диагональдан төмен орналасқан", isCorrect: false },
      { text: "бас диагональдан жоғары орналасқан", isCorrect: false }
    ]
  },
  {
    question: "Сұрыпталған үлкен массивте элементті іздеу массивтің жартысын алып тастаудан тұрады",
    answers: [
      { text: "екілік іздеу", isCorrect: true },
      { text: "мәтіндік іздеу", isCorrect: false },
      { text: "иерархиялық іздеу", isCorrect: false },
      { text: "сандық іздеу", isCorrect: false },
      { text: "тізбекті іздеу", isCorrect: false }
    ]
  },
  {
    question: "Берілген (бастапқы) төбеден басқа барлық төбелерге қысқа жолды іздеу",
    answers: [
      { text: "Дейкстра", isCorrect: true },
      { text: "Шелл", isCorrect: false },
      { text: "Крусал", isCorrect: false },
      { text: "Блум", isCorrect: false },
      { text: "Прима", isCorrect: false }
    ]
  },
  {
    question: "C++ тілінде нақты сандардың үтірден кейінгі сандарын басқару үшін қолданылатын басқарушы",
    answers: [
      { text: "precision", isCorrect: true },
      { text: "read", isCorrect: false },
      { text: "gcount", isCorrect: false },
      { text: "width", isCorrect: false },
      { text: "setw", isCorrect: false }
    ]
  },
  {
    question: "Түпкі шешімі емес жалпы келетін шешімді қарастыратын алгоритм аталады",
    answers: [
      { text: "эвристикалық", isCorrect: true },
      { text: "төмен", isCorrect: false },
      { text: "орташа", isCorrect: false },
      { text: "уақытша", isCorrect: false },
      { text: "жоғарғы", isCorrect: false }
    ]
  },
  {
    question: "Бағытталған графтардың берілу тәсілі",
    answers: [
      { text: "сәйкестік матрица", isCorrect: true },
      { text: "инциденция кесте", isCorrect: false },
      { text: "көп өлшемді кесте", isCorrect: false },
      { text: "қарапайым матрица", isCorrect: false },
      { text: "хеш-кесте", isCorrect: false }
    ]
  },
  {
    question: "Алгоритмдердің міндетті қасиеттерінің бірі",
    answers: [
      { text: "түсіндірмелік", isCorrect: true },
      { text: "анықталмағандық", isCorrect: false },
      { text: "шексіздік", isCorrect: false },
      { text: "дискреттілік", isCorrect: false },
      { text: "тұрақтылық", isCorrect: false }
    ]
  },
  {
    question: "Көптік таңдау құрылымы",
    answers: [
      { text: "switch", isCorrect: true },
      { text: "if", isCorrect: false },
      { text: "do-while", isCorrect: false },
      { text: "while-do", isCorrect: false },
      { text: "if-else", isCorrect: false }
    ]
  },
  {
    question: "C++ тілінде бағдарламаның негізгі бөлігі келтірілген. Нәтижесінде экранға шығатын жауап\n    double x=3.5;\n    int y;\n    if(x==0) y=7*pow(x,3);\n    else y=2*pow(x,3);\n    cout<<y;",
    answers: [
      { text: "85", isCorrect: true },
      { text: "85.75", isCorrect: false },
      { text: "0", isCorrect: false },
      { text: "75", isCorrect: false },
      { text: "54", isCorrect: false }
    ]
  },
  {
    question: "Префиксті декремент дұрыс жазылуы",
    answers: [
      { text: "--a", isCorrect: true },
      { text: "a--", isCorrect: false },
      { text: "--", isCorrect: false },
      { text: "a-=", isCorrect: false },
      { text: "-=a", isCorrect: false }
    ]
  },
  {
    question: "Постфиксті инкремент дұрыс жазылуы",
    answers: [
      { text: "a++", isCorrect: true },
      { text: "--a", isCorrect: false },
      { text: "a--", isCorrect: false },
      { text: "++a", isCorrect: false },
      { text: "--", isCorrect: false }
    ]
  },
  {
    question: "ЖӘНЕ логикалық операторының дұрыс жазылуы",
    answers: [
      { text: "a&&b", isCorrect: true },
      { text: "a||b", isCorrect: false },
      { text: "a!", isCorrect: false },
      { text: "a/b", isCorrect: false },
      { text: "ab", isCorrect: false }
    ]
  },
  {
    question: "S жолы бос болғанда true, ал бос болмағанда false қайтаратын жолдардағы әдіс",
    answers: [
      { text: "S.empty()", isCorrect: true },
      { text: "S.substr()", isCorrect: false },
      { text: "S.find()", isCorrect: false },
      { text: "S.insert()", isCorrect: false },
      { text: "S.size()", isCorrect: false }
    ]
  },
  {
    question: "Тармақталған алгоритмнің құрамынан нәтижесінде экранға шығатын өрнек\n    #include <iostream>\n    using namespace std;\n    int main(){\n        int i = 25;\n        if (i > 15) cout << \"i-дің мәні 15 -тен үлкен\";\n        else cout << \"i-дің мәні 15-тен кіші\";\n        return 0;\n    }",
    answers: [
      { text: "i-дің мәні 15 -тен үлкен", isCorrect: true },
      { text: "i-дің мәні 15-ке жуық", isCorrect: false },
      { text: "i-дің мәні 15-ке тең", isCorrect: false },
      { text: "i-дің мәні белгісіз", isCorrect: false },
      { text: "i-дің мәні 15-тен кіші", isCorrect: false }
    ]
  },
  {
    question: "Массивтерді сыртқы сұрыптау алгоритмі",
    answers: [
      { text: "біріктіру сұрыптау", isCorrect: true },
      { text: "қосып сұрыптау", isCorrect: false },
      { text: "шеңберлік сұрыптау", isCorrect: false },
      { text: "көпіршікті сұрыптау", isCorrect: false },
      { text: "кірістіру сұрыптау", isCorrect: false }
    ]
  },
  {
    question: "int func() функциясы қайтарады",
    answers: [
      { text: "бүтін деректі", isCorrect: true },
      { text: "символ деректі", isCorrect: false },
      { text: "мәтін деректі", isCorrect: false },
      { text: "бөлшек деректі", isCorrect: false },
      { text: "логикалық деректі", isCorrect: false }
    ]
  },
  {
    question: "f(n) = n! функцияларының дұрыс берілуі",
    answers: [
      { text: "f(0)=1, f(n)=n*f(n-1)", isCorrect: true },
      { text: "f(0)=1, f(n)=f(n-1)+1", isCorrect: false },
      { text: "f(0)=0, f(n)=f(n-1)+2", isCorrect: false },
      { text: "f(0)=1, f(n)=2n*f(n-1)", isCorrect: false },
      { text: "f(0)=0, f(n)=f(n-1)+1", isCorrect: false }
    ]
  },
  {
    question: "printf() функциясының дұрыс жазылуы",
    answers: [
      { text: "int a; printf(\"%d\", ;", isCorrect: true },
      { text: "int a; printf(\"%c\", ;", isCorrect: false },
      { text: "int a; printf(\"a=%s\", ;", isCorrect: false },
      { text: "int a; printf(\"%d\", &;", isCorrect: false },
      { text: "int a; printf(\"a=%f\", ;", isCorrect: false }
    ]
  },
  {
    question: "Массивтегі іздеу алгоритмінің классификациясы",
    answers: [
      { text: "екілік (бинарлық) іздеу", isCorrect: true },
      { text: "шелл іздеуі", isCorrect: false },
      { text: "таңдап іздеу", isCorrect: false },
      { text: "кірістіру іздеу", isCorrect: false },
      { text: "квадраттық іздеу", isCorrect: false }
    ]
  },
  {
    question: "{5, 3, 2, 8, 7, 4, 5} бастапқы тізбек үшін көпіршік (бабл) сұрыптау алгоритмінің бірінші қадамының нәтижесінде алынатын тізбек",
    answers: [
      { text: "{3, 2, 5, 4, 5, 7, 8}", isCorrect: true },
      { text: "{1, 2, 3, 5, 6, 7, 4}", isCorrect: false },
      { text: "{3, 2, 5, 7, 4, 5, 8}", isCorrect: false },
      { text: "{2, 3, 5, 4, 5, 7, 8}", isCorrect: false },
      { text: "{2, 3, 4, 5, 5, 7, 8}", isCorrect: false }
    ]
  },
  {
    question: "Көпіршік сұрыптау алгоритмінің уақыттық күрделілігі",
    answers: [
      { text: "O(n²)", isCorrect: true },
      { text: "O(n³)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
      { text: "O(1)", isCorrect: false },
      { text: "O(log n)", isCorrect: false }
    ]
  },
  {
    question: "Алгоритм күрделілігінің өсу ретімен орналасқан нұсқалары",
    answers: [
      { text: "O(1), O(N), O(N³)", isCorrect: true },
      { text: "O(N²), O(N), O(log N)", isCorrect: false },
      { text: "O(2N), O(N), O(1)", isCorrect: false },
      { text: "O(N), O(1), O(N log N)", isCorrect: false },
      { text: "O(N²), O(log N), O(N³)", isCorrect: false }
    ]
  },
  {
    question: "O(log n) уақытта жұмыс істейтін алгоритм",
    answers: [
      { text: "екілік іздеу алгоритмі", isCorrect: true },
      { text: "екі матрицаны көбейту алгоритмі", isCorrect: false },
      { text: "сызықтық іздеу алгоритмі", isCorrect: false },
      { text: "көпіршікті сұрыптау алгоритмі", isCorrect: false },
      { text: "бүтін санның тақ-жұптығын табу алгоритмі", isCorrect: false }
    ]
  },
  {
    question: "Бір байланыстырылған тізім анықтамасы",
    answers: [
      { text: "бұл дерек пен келесі түйінге көрсеткіші бар мәліметтер құрылымы", isCorrect: true },
      { text: "бұл FIFO принципі бойынша жұмыс істейтін мәліметтер құрылымы", isCorrect: false },
      { text: "бұл дерек пен келесі жеке адресті түйінге көрсеткішті қамтитын мәліметтер құрылымы", isCorrect: false },
      { text: "бұл LIFO принципі бойынша жұмыс істейтін мәліметтер құрылымы", isCorrect: false },
      { text: "бұл LFIFO принципі бойынша жұмыс істейтін мәліметтер құрылымы", isCorrect: false }
    ]
  },
  {
    question: "C++ тілінде динамикалық бүтін типті массивті жариялаудың дұрыс жазылуы",
    answers: [
      { text: "int* a = new int[n]", isCorrect: true },
      { text: "int* a = new int(*)", isCorrect: false },
      { text: "int* a = new int(n)", isCorrect: false },
      { text: "int a[n]", isCorrect: false },
      { text: "int* a = new int(n)", isCorrect: false }
    ]
  },
  {
    question: "Стек әдістеріне жататын функция",
    answers: [
      { text: "pop()", isCorrect: true },
      { text: "size()", isCorrect: false },
      { text: "push()", isCorrect: false },
      { text: "clear()", isCorrect: false },
      { text: "contains()", isCorrect: false }
    ]
  },
  {
    question: "Хеш кестесінің анықтамасы",
    answers: [
      { text: "хеш кестесі — есте жылдам іздеу мен қолжетімділік қамтамасыздандыратын деректер құрылымы", isCorrect: true },
      { text: "хеш кестесі — типтері бірдей элементтерден тұратын деректер құрылымы", isCorrect: false },
      { text: "хеш кестесі — әртүрлі типті реттелген деректердің құрылымы", isCorrect: false },
      { text: "хеш кестесі — FIFO принципі бойынша жұмыс істейтін деректер құрылымы", isCorrect: false },
      { text: "хеш кестесі — бір-бірімен байланысқан деректер құрылымы", isCorrect: false }
    ]
  },
  {
    question: "Толтырылған массив ұяшығына кілтті хештеудің атауы",
    answers: [
      { text: "коллизия", isCorrect: true },
      { text: "бірігу", isCorrect: false },
      { text: "ажырату", isCorrect: false },
      { text: "қиылысу", isCorrect: false },
      { text: "бөліну", isCorrect: false }
    ]
  },
  {
    question: "Хеш кестесінде коллизиядан құтылу әдісі",
    answers: [
      { text: "ашық адрестеудің әдісі", isCorrect: true },
      { text: "трапеция әдісі", isCorrect: false },
      { text: "ормандар әдісі", isCorrect: false },
      { text: "қалдықты бөлшектеу әдісі", isCorrect: false },
      { text: "квадрат ортасы әдісі", isCorrect: false }
    ]
  },
  {
    question: "AVL ағашында жою операциясының орындалу уақыты",
    answers: [
      { text: "O(logn)", isCorrect: true },
      { text: "O(n³)", isCorrect: false },
      { text: "O(n²)", isCorrect: false },
      { text: "O(nlogn)", isCorrect: false },
      { text: "O(1)", isCorrect: false }
    ]
  },
  {
    question: "20 түйіні бар толық екілік ағаш бар. Тамыры 0 деңгейінде орналасқан болса, 4 деңгейіндегі түйін саны",
    answers: [
      { text: "4", isCorrect: true },
      { text: "0", isCorrect: false },
      { text: "8", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "5", isCorrect: false }
    ]
  },
  {
    question: "Графтың түйінінің атауы",
    answers: [
      { text: "төбе", isCorrect: true },
      { text: "нүкте", isCorrect: false },
      { text: "қабырға", isCorrect: false },
      { text: "жота", isCorrect: false },
      { text: "жол", isCorrect: false }
    ]
  },
  {
    question: "Екілік ағаштағы іздеу қызыл-қаралы ағаш қасиеттерінің бірі",
    answers: [
      { text: "егер түйін қызыл, онда оның екі мұрагері де қара", isCorrect: true },
      { text: "түйіннің сол ішкі ағашының кілтінің мәні түйіннің кілтінің мәнінен үлкен болса", isCorrect: false },
      { text: "барлық қызыл-қара ағаштың жапырақтары бір деңгейде орналасса", isCorrect: false },
      { text: "түйіннің сол ішкі ағашының кілтінің мәні түйіннің мәнінен кіші болса", isCorrect: false },
      { text: "әрбір түйіннің екі ұрпағы бос болса", isCorrect: false }
    ]
  },
  {
    question: "Барлық төбелік жұптар үшін ең қысқа жолдарды құру есебінде ең қысқа жол ізделеді",
    answers: [
      { text: "әр төбеден барлық басқа төбелерге дейін", isCorrect: true },
      { text: "бастапқы төбеден басқа бірнеше қабырға қашықтықтағы басқа шыңдарға дейін", isCorrect: false },
      { text: "бастапқы төбеден басқа бір қабырға қашықтықтағы басқа шыңдарға дейін", isCorrect: false },
      { text: "бастапқы төбеден басқа төбелерге дейін", isCorrect: false },
      { text: "әр төбеден бастапқы төбеге дейін", isCorrect: false }
    ]
  },
  {
    question: "Егер байланыспаған графтың төбелерінің әрқайсысы басқаларымен қабырғалармен жалғанған болса, онда ол граф",
    answers: [
      { text: "толық граф деп аталады", isCorrect: true },
      { text: "толық емес граф деп аталады", isCorrect: false },
      { text: "гиперграф деп аталады", isCorrect: false },
      { text: "шыңжық (тізбек) деп аталады", isCorrect: false },
      { text: "мультиграф деп аталады", isCorrect: false }
    ]
  },
  {
    question: "Есептегі енгізу және шығару деректерін анықтау. Есеп: Шеңбердің ұзындығын екі тәсілмен табу керек, егер диаметрі d белгілі болса: L = pi*d және радиусы R белгілі болса: L1 = 2pi*R. R радиусын қолданып, дөңгелектің ауданын табу керек: S = pi*R^2",
    answers: [
      { text: "S, L, L1 және π, R, d", isCorrect: true },
      { text: "π, R, d және S, L, L1", isCorrect: false },
      { text: "R, L, L1 және π, S, d", isCorrect: false },
      { text: "π, S, R және d, L1", isCorrect: false },
      { text: "R, d, L1 және π, S, L", isCorrect: false }
    ]
  },
  {
    question: "Стек пен кезектердің қолданылатын саласы",
    answers: [
      { text: "функцияны шақыру және оны орындау", isCorrect: true },
      { text: "жергілікті және жаһандық айнымалыларға мән беру", isCorrect: false },
      { text: "процедура мен функцияларға аргументтер мәнін жіберу", isCorrect: false },
      { text: "процедурадағы жаһандық айнымалыларды шақыру", isCorrect: false },
      { text: "процедура мен функцияларға цикл қолдану", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі функцияның денесі тұрады",
    answers: [
      { text: "жариялау мен операторлардан", isCorrect: true },
      { text: "түсініктемелер мен модульдерден", isCorrect: false },
      { text: "кітапханалар мен модульдерден", isCorrect: false },
      { text: "жарияланған қарапайым типтерден", isCorrect: false },
      { text: "түсініктемелер мен кітапханалардан", isCorrect: false }
    ]
  },
  {
    question: "Қызыл-қара теңестірілген ағаштың түбірі әр уақытта",
    answers: [
      { text: "қара", isCorrect: true },
      { text: "көк", isCorrect: false },
      { text: "қызыл", isCorrect: false },
      { text: "ақ", isCorrect: false },
      { text: "жасыл", isCorrect: false }
    ]
  },
  {
    question: "C++ тілінде оңға және солға жылжыту операциялары орындалғанда, оң жақтағы және сол жақтағы биттер босатылып, орнына жазылады",
    answers: [
      { text: "нөлдер", isCorrect: true },
      { text: "теріc сандар", isCorrect: false },
      { text: "сызықтар", isCorrect: false },
      { text: "сұрақ белгілері", isCorrect: false },
      { text: "көбейту белгілері", isCorrect: false }
    ]
  },
  {
    question: "Алгоритмнің факториалдық күрделілігі",
    answers: [
      { text: "O(n!)", isCorrect: true },
      { text: "O(n³)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
      { text: "O(log n)", isCorrect: false },
      { text: "O(1)", isCorrect: false }
    ]
  },
  {
    question: "Бос орнымен бір бірінен бөлінген символдардың тізбегі",
    answers: [
      { text: "лексема", isCorrect: true },
      { text: "атрибуттар", isCorrect: false },
      { text: "тұрақты тіркестер", isCorrect: false },
      { text: "функция", isCorrect: false },
      { text: "көрсеткіштер", isCorrect: false }
    ]
  },
  {
    question: "Ұрпақтық түйіндердің саны көрсетеді",
    answers: [
      { text: "түйіндердің дәрежесін", isCorrect: true },
      { text: "түйіндердің тереңдігін", isCorrect: false },
      { text: "түйіндердің биіктігін", isCorrect: false },
      { text: "түйіндердің толықтығын", isCorrect: false },
      { text: "түйіндердің енін", isCorrect: false }
    ]
  },
  {
    question: "Жолдар құрылымы ретінде ұйымдастырылатын тәсіл",
    answers: [
      { text: "графтар", isCorrect: true },
      { text: "біріктеген тізімдер", isCorrect: false },
      { text: "біріккен сызықты тізім", isCorrect: false },
      { text: "бинарлық түйін", isCorrect: false },
      { text: "бинарлық ағаш", isCorrect: false }
    ]
  },
  {
    question: "Параметрлік циклды қолданғанда пайдаланатын оператор",
    answers: [
      { text: "for", isCorrect: true },
      { text: "while", isCorrect: false },
      { text: "case", isCorrect: false },
      { text: "if", isCorrect: false },
      { text: "else", isCorrect: false }
    ]
  },
  {
    question: "Бинарлық іздеу ағашының биіктігі бойынша теңестіру түрлері",
    answers: [
      { text: "AVL, қызыл-қара", isCorrect: true },
      { text: "ГМВ, қара-қызыл", isCorrect: false },
      { text: "тереңдік пен ені бойынша", isCorrect: false },
      { text: "қызыл-көк, DFS", isCorrect: false },
      { text: "BFS, DFS", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі switch құрылымына енетін бірнеше белгі және міндетті емес белгілердің атауы",
    answers: [
      { text: "case, default", isCorrect: true },
      { text: "if, else", isCorrect: false },
      { text: "else, case", isCorrect: false },
      { text: "for, then", isCorrect: false },
      { text: "continue, break", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі бағдарлама фрагменті есептеулерді сипаттайды",
    answers: [
      { text: "итеративті", isCorrect: true },
      { text: "бағдарламалық", isCorrect: false },
      { text: "логикалық", isCorrect: false },
      { text: "рекурсивті", isCorrect: false },
      { text: "математикалық", isCorrect: false }
    ]
  },
  {
    question: "A массивін сұрыптау барысында i-ші этапта A[i] элементін алып, алдындағы тәртіптелген элементтердің арасына орналастырамыз",
    answers: [
      { text: "кірістіру арқылы сұрыптау", isCorrect: true },
      { text: "шелл сұрыптауы", isCorrect: false },
      { text: "разрядты сұрыптау", isCorrect: false },
      { text: "көпіршікті сұрыптау", isCorrect: false },
      { text: "таңдау арқылы сұрыптау", isCorrect: false }
    ]
  },
  {
    question: "Бағытталған циклы жоқ граф",
    answers: [
      { text: "ациклді", isCorrect: true },
      { text: "сыбайласқан", isCorrect: false },
      { text: "циклді", isCorrect: false },
      { text: "байланыспаған", isCorrect: false },
      { text: "инцидентті", isCorrect: false }
    ]
  },
  {
    question: "Элементті іздеу мен жою байланысқан тізімнің ұзындығына байланысты. Хеш-кестеден элементті іздеу және жою операциясының есептеу күрделілігі нашар жағдайда болады",
    answers: [
      { text: "Θ(n)", isCorrect: true },
      { text: "Θ(1)", isCorrect: false },
      { text: "Θ(log n)", isCorrect: false },
      { text: "Θ(eⁿ)", isCorrect: false },
      { text: "Θ(n²)", isCorrect: false }
    ]
  },
  {
    question: "Көпіршікті сұрыптау алгоритміне негізделген сұрыптау әдісі",
    answers: [
      { text: "шаршылық", isCorrect: true },
      { text: "пирамидалық", isCorrect: false },
      { text: "шелл", isCorrect: false },
      { text: "шеңберлік", isCorrect: false },
      { text: "таңдау арқылы", isCorrect: false }
    ]
  },
  {
    question: "Сұрыптау жасау барысында берілген массив екі массивке бөлініп, әрқайсысы рекурсияны қолданып сұрыпталады, соңында екіге бөлінген сұрыпталған массивті және екі индексті қолдануымен сол жақтағы және оң жақтағы ішкі массивтерден ең кіші элементті алып жаңа массивке салу арқылы біріктіріледі. Бұл сұрыптау әдісінің атауы",
    answers: [
      { text: "қосу (mergesort)", isCorrect: true },
      { text: "квадратты (squarsort)", isCorrect: false },
      { text: "разрядты (radixsort)", isCorrect: false },
      { text: "жылдам (quicksort)", isCorrect: false },
      { text: "көпіршікті (bubblesort)", isCorrect: false }
    ]
  },
  {
    question: "Белгілі бір тапсырмаларды орындауға арналған программаның жеке дара бөлігі",
    answers: [
      { text: "функциялар", isCorrect: true },
      { text: "іздеу", isCorrect: false },
      { text: "сұрыптау", isCorrect: false },
      { text: "массив", isCorrect: false },
      { text: "ерекшелеу", isCorrect: false }
    ]
  },
  {
    question: "Қабырғалар арқылы байланысқан төбелердің кез келген тізбегі",
    answers: [
      { text: "жол", isCorrect: true },
      { text: "бағыт", isCorrect: false },
      { text: "ілмек", isCorrect: false },
      { text: "төбе", isCorrect: false },
      { text: "қабырға", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі бағдарламаның нәтижесін анықтау",
    answers: [
      { text: "БcccББББ", isCorrect: true },
      { text: "БББсссссс", isCorrect: false },
      { text: "сссБББББ", isCorrect: false },
      { text: "сссББссс", isCorrect: false },
      { text: "ссссссБББ", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі бағдарлама фрагментіндегі екі өлшемді массивтегі жол мен бағанның саны static int a[][?] = {\n    {5, 3, 4, 2},\n    {3, 3, 4, 5},\n    {2, 3, 3, 4},\n    {5, 3, 8, 4}\n};",
    answers: [
      { text: "4, 4", isCorrect: true },
      { text: "6, 4", isCorrect: false },
      { text: "3, 5", isCorrect: false },
      { text: "2, 3", isCorrect: false },
      { text: "5, 4", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі бағдарлама фрагменті есептеулерді сипаттайды factorial = 1;\nfor (int counter = number; counter >= 1; counter--)\n    factorial *= counter;",
    answers: [
      { text: "итеративті", isCorrect: true },
      { text: "бағдарламалық", isCorrect: false },
      { text: "логикалық", isCorrect: false },
      { text: "рекурсивті", isCorrect: false },
      { text: "математикалық", isCorrect: false }
    ]
  },
  {
    question: "Берілген key кілті үшін хеш-функция әр уақытта бірғана хеш-код hash(key) қайтаруы тиіс",
    answers: [
      { text: "determinism", isCorrect: true },
      { text: "multiplication method", isCorrect: false },
      { text: "double hashing", isCorrect: false },
      { text: "uniform hashing", isCorrect: false },
      { text: "division method", isCorrect: false }
    ]
  },
  {
    question: "C++ тіліндегі бағдарлама фрагменті орындалу нәтижесінде экранға шығады\n{ for (int i=0; i < 15; i++)\n        for (int j=0; j < 14; j++)\n            a[i][j] = 1 + random(9);\n    printf(\"%i\", a[i][j]);\n    getch();}",
    answers: [
      { text: "1 - 10 диапазонындағы кездейсоқ сандармен толтырылған 15 жолдан және 14 бағаннан тұратын екі өлшемді массив шығады", isCorrect: true },
      { text: "9 - 15 диапазонындағы кездейсоқ сандармен толтырылған 15 жолдан және 14 бағаннан тұратын екі өлшемді массив шығады", isCorrect: false },
      { text: "1 - 14 диапазонындағы кездейсоқ сандармен толтырылған 9 жолдан және 15 бағаннан тұратын екі өлшемді массив шығады", isCorrect: false },
      { text: "9 - 14 диапазонындағы кездейсоқ сандармен толтырылған 15 жолдан және 9 бағаннан тұратын екі өлшемді массив шығады", isCorrect: false },
      { text: "1 - 15 диапазонындағы кездейсоқ сандармен толтырылған 9 жолдан және 9 бағаннан тұратын екі өлшемді массив шығады", isCorrect: false }
    ]
  },
  {
    question: "Funkцияны қайтару операторы",
    answers: [
      { text: "return", isCorrect: true },
      { text: "if", isCorrect: false },
      { text: "else", isCorrect: false },
      { text: "while", isCorrect: false },
      { text: "for", isCorrect: false }
    ]
  },
  {
    question: "Символдық типтегі шамаларға компилятор жадында бөлінетін байт мөлшері",
    answers: [
      { text: "1", isCorrect: true },
      { text: "256", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "10", isCorrect: false },
      { text: "0", isCorrect: false }
    ]
  },
  {
    question: "C++ тілінде мәні қандай да бір символдар тізбегі болатын айнымалылар типі",
    answers: [
      { text: "string", isCorrect: true },
      { text: "int", isCorrect: false },
      { text: "long", isCorrect: false },
      { text: "real", isCorrect: false },
      { text: "double", isCorrect: false }
    ]
  },
  {
    question: "Интерпретаторлар",
    answers: [
      { text: "бағдарламаның мәтініне қарап дәйексөз операторларды орындайды", isCorrect: true },
      { text: "программаларды сипаттайды", isCorrect: false },
      { text: "алгоритмдерді орындайды", isCorrect: false },
      { text: "машиналық кодтарға жинақталған бағдарламаны алып оны орындайды", isCorrect: false },
      { text: "есептерді шешеді", isCorrect: false }
    ]
  },
  {
    question: "Программалау парадигмасы",
    answers: [
      { text: "программаның жалпы стилін анықтайтын нұсқаулардың, ережелердің және идеялардың жиынтығы", isCorrect: true },
      { text: "объектілер туралы анықтама", isCorrect: false },
      { text: "мақсатқа жетуге бағытталған, орындаушыға айқын жазылатын және нақты командалар", isCorrect: false },
      { text: "мәліметтердің жиынын және оларды сипаттауы", isCorrect: false },
      { text: "орындаушыны орындау үшін берілетін командалар", isCorrect: false }
    ]
  },
  {
    question: "Бағдарламалық жабдықты тестілеудің әдісі",
    answers: [
      { text: "«қара жәшік» әдісі бойынша тестілеу", isCorrect: true },
      { text: "логикалық тестілеу", isCorrect: false },
      { text: "«ақырғы нәтиж» әдісі бойынша тестілеу", isCorrect: false },
      { text: "жазу тестілеу", isCorrect: false },
      { text: "поперепроксиное тестілеу", isCorrect: false }
    ]
  },
  {
    question: "Қысқа жолды іздеу тапсырмасында Дейкстра алгоритмінің орнына қолданылатын алгоритм",
    answers: [
      { text: "Беллман-Форд алгоритмі", isCorrect: true },
      { text: "Шелл алгоритмі", isCorrect: false },
      { text: "Іздеу алгоритмі", isCorrect: false },
      { text: "Тізбектелген алгоритм", isCorrect: false },
      { text: "Бұршақ алгоритмі", isCorrect: false }
    ]
  },
  {
    question: "Программа фрагментінің нәтижесі\nint a=5;\nint b=0;\nint r=0;\nr=b++ + a;\ncout << a;\ncout << r;\ncout << b;",
    answers: [
      { text: "510", isCorrect: true },
      { text: "000", isCorrect: false },
      { text: "111", isCorrect: false },
      { text: "500", isCorrect: false },
      { text: "511", isCorrect: false }
    ]
  },
  {
    question: "Функцияны қайта-қайта есептеп, соңында шешім шығаратын айналым түрі",
    answers: [
      { text: "логикалық айналым", isCorrect: true },
      { text: "шартсыз айналым", isCorrect: false },
      { text: "бүтіндік айналым", isCorrect: false },
      { text: "бүтін айналым", isCorrect: false },
      { text: "рекурсивті айналым", isCorrect: false }
    ]
  },
  {
    question: "int f(int x) { char x; float z; double t; } функциясының қайтарым типі",
    answers: [
      { text: "int", isCorrect: true },
      { text: "char", isCorrect: false },
      { text: "double", isCorrect: false },
      { text: "string", isCorrect: false },
      { text: "float", isCorrect: false }
    ]
  },
  {
    question: "Өзін өзі шақыратын функция",
    answers: [
      { text: "рекурсия", isCorrect: true },
      { text: "жадссыз", isCorrect: false },
      { text: "стек", isCorrect: false },
      { text: "процедура", isCorrect: false },
      { text: "функция", isCorrect: false }
    ]
  },
  {
    question: "Алгоритмнің күрделілігінің кластары",
    answers: [
      { text: "кубтық, квадраттық, константалы", isCorrect: true },
      { text: "өсірілетін, азаятын", isCorrect: false },
      { text: "жапсарлас, иілмелі", isCorrect: false },
      { text: "қиын, өте қиын", isCorrect: false },
      { text: "озық, күрделі", isCorrect: false }
    ]
  },
  {
    question: "1000-ға дейінгі элементтерді сұрыптаудың тәжірибедегі ең жылдам алгоритмі",
    answers: [
      { text: "жылдам сұрыптау", isCorrect: true },
      { text: "таңдау сұрыптау", isCorrect: false },
      { text: "қосу арқылы сұрыптау", isCorrect: false },
      { text: "пирамидалық сұрыптау", isCorrect: false },
      { text: "мұралы сұрыптау", isCorrect: false }
    ]
  },
  {
    question: "Программаны нұсқауларын машиналық тілге тікелей аударылуын қамтамасыз ететін программа",
    answers: [
      { text: "интерпретатор", isCorrect: true },
      { text: "компилятор", isCorrect: false },
      { text: "қолданбалы программа", isCorrect: false },
      { text: "жүйелік программа", isCorrect: false },
      { text: "транслятор", isCorrect: false }
    ]
  },
  {
    question: "Программаны бүтін мәтінін машиналық тілге аударылуын қамтамасыз ететін программа",
    answers: [
      { text: "компилятор", isCorrect: true },
      { text: "интерпретатор", isCorrect: false },
      { text: "транслятор", isCorrect: false },
      { text: "қолданбалы программа", isCorrect: false },
      { text: "жүйелік программа", isCorrect: false }
    ]
  },
  {
    question: "Көшіру орын ауыстыруға қарағанда орындалу тездігі",
    answers: [
      { text: "үш есе", isCorrect: true },
      { text: "он есе", isCorrect: false },
      { text: "екі есе", isCorrect: false },
      { text: "жүз есе", isCorrect: false },
      { text: "бес есе", isCorrect: false }
    ]
  },
  {
    question: "Күрделілігі орташа жағдайда O(n²) болатын сұрыптау алгоритмі",
    answers: [
      { text: "таңдау", isCorrect: true },
      { text: "біріктіру", isCorrect: false },
      { text: "екілік ағаш", isCorrect: false },
      { text: "пирамидалық", isCorrect: false },
      { text: "жылдам", isCorrect: false }
    ]
  },
  {
    question: "Кеңес құрылымы типті сипаттама не",
    answers: [
      { text: "келесі еті келетін жолмен қамтыласа өтеді", isCorrect: true },
      { text: "LIFO қасиетін қолданады", isCorrect: false },
      { text: "келесі бос орын жадта қалтасыз өтеді", isCorrect: false },
      { text: "n-1 деп аталған емес элементтер сигналды", isCorrect: false },
      { text: "келесі орынға емес жадпен қамтылады етеді", isCorrect: false }
    ]
  },
  {
    question: "Кеңес сақтау үшін қолданылады",
    answers: [
      { text: "жазу жазу кезінде қолданылатын бастапқы ретпен", isCorrect: true },
      { text: "көп астық болған сақтаушы калиптер туралы хабарлама", isCorrect: false },
      { text: "көп көлемде алгоритм сипаттамасы элементтер", isCorrect: false },
      { text: "өңделетін элементтердің әректетілігін символдық алу", isCorrect: false },
      { text: "сұрыптау кезінде алгоритм табылатын элементтер", isCorrect: false }
    ]
  },
  {
    question: "Хеш-кесте құрылады",
    answers: [
      { text: "ассоциативті массивтің негізінде", isCorrect: true },
      { text: "дектің негізінде", isCorrect: false },
      { text: "стектің негізінде", isCorrect: false },
      { text: "жиымның негізінде", isCorrect: false },
      { text: "кезектің негізінде", isCorrect: false }
    ]
  },
  {
    question: "Хеш-кесте операциясын қолданғанда аз уақыт себеп",
    answers: [
      { text: "хеш-кодтың", isCorrect: true },
      { text: "массив элементтерін орынға көшіру", isCorrect: false },
      { text: "массив элементтерін көрсеткішпен салыстырып үйлестіру", isCorrect: false },
      { text: "әрбір операцияны тікелей жұпты мәнге көшіру", isCorrect: false },
      { text: "көрсеткіш тізбегімен массив сегментін үйлестіру", isCorrect: false }
    ]
  },
  {
    question: "Хеш-кестенің түрі",
    answers: [
      { text: "тура ашық адреспен хеш-кесте", isCorrect: true },
      { text: "тұйық адреспен хеш-кесте", isCorrect: false },
      { text: "тізбекті адреспен хеш-кесте", isCorrect: false },
      { text: "параллель адреспен хеш-кесте", isCorrect: false },
      { text: "ерекше адреспен хеш-кесте", isCorrect: false }
    ]
  },
  {
    question: "Бинарлы ағаш түрі",
    answers: [
      { text: "Қызыл қара", isCorrect: true },
      { text: "Қызыл ақ", isCorrect: false },
      { text: "Қызыл жасыл", isCorrect: false },
      { text: "Қызыл сұр", isCorrect: false },
      { text: "Қызыл көк", isCorrect: false }
    ]
  },
  {
    question: "Ағашты көрсету үшін қолданылатын массивтің n индексінен тұратын түйіннің оң жақ ұрпағы",
    answers: [
      { text: "2*n + 1", isCorrect: true },
      { text: "2ⁿ + 1", isCorrect: false },
      { text: "2ⁿ - 1", isCorrect: false },
      { text: "n*1", isCorrect: false },
      { text: "n - 1", isCorrect: false }
    ]
  },
  {
    question: "Әрбір жапырақ d немесе d-1 тереңдікте не және кез келген төбенің мәні оның ұрпақтарының мәнінен үлкен (max-heap) болып шарттарды қанағаттандыратын екілік ағаш",
    answers: [
      { text: "Әрбір жапырақ d немесе d-1 тереңдікте не және кез келген төбенің мәні оның ұрпақтарының мәнінен үлкен (max-heap) болып шарттарды қанағаттандыратын екілік ағаш", isCorrect: true },
      { text: "N массивінің әрбір ұяшығы екі кілт мәнді тізбемен байланысты көрсеткіш болып табылады", isCorrect: false },
      { text: "Жадда бірінің артынан бірі орналасқан бір типті айнымалылардың жиыны", isCorrect: false },
      { text: "Барлық мәндер алдын ала белгілі болғанда қолданылатын немесе анық сансыз өзгертілмелі", isCorrect: false },
      { text: "Әртүрлі элементтерді сақтау үшін арнайы мәліметтер құрылымы. Және барлық элементтер бір ғана жалғыз адреске сақталады", isCorrect: false }
    ]
  },
  {
    question: "Графтар теориясындағы нүктелер",
    answers: [
      { text: "төбе", isCorrect: true },
      { text: "доға", isCorrect: false },
      { text: "сызық", isCorrect: false },
      { text: "қабырға", isCorrect: false },
      { text: "нүкте", isCorrect: false }
    ]
  },
  {
    question: "Гиперграф",
    answers: [
      { text: "Әрбір қабырғалары екі төбе ғана емес, сонымен қатар ішкі төбелер кез келген қосылатын жалпылама графтың түрі", isCorrect: true },
      { text: "Төбелер қабырғалармен қосылған және әр доға бөлек бағытқа (инциденттік) жалғанатын графтың түрі", isCorrect: false },
      { text: "Бағытталған қабырғалары бар жалпыланған графтың түрі", isCorrect: false },
      { text: "Бағытталмаған қабырғалары бар жалпыланған графтың түрі", isCorrect: false },
      { text: "Бағытталмаған және бағытталған қабырғалары бар жалпыланған графтың түрі", isCorrect: false }
    ]
  },
  {
    question: "G=(V, арқылы берілген графты айналу әдісінің мағынасы",
    answers: [
      { text: "тереңдеп іздеу", isCorrect: true },
      { text: "эйлерлік іздеу", isCorrect: false },
      { text: "рекурсивті іздеу", isCorrect: false },
      { text: "кеңінен іздеу", isCorrect: false },
      { text: "аралас іздеу", isCorrect: false }
    ]
  },
  {
    question: "Программа жұмысының нәтижесі\n#include <iostream>\nusing namespace std;\nmain() {\n    int a[] = {10, 20, 30};\n    cout << *a + 1;}",
    answers: [
      { text: "A) 11", isCorrect: true },
      { text: "B) 30", isCorrect: false },
      { text: "C) 20", isCorrect: false },
      { text: "B) 10", isCorrect: false },
      { text: "C) 21", isCorrect: false }
    ]
  },
  {
    question: "Кезек сақтау үшін қолданылады",
    answers: [
      { text: "D) сұрыптау кезінде автоматты табылатын элементтер", isCorrect: true },
      { text: "A) аяқ асты болатын сыртқы қателер туралы хабарлама", isCorrect: false },
      { text: "B) қою кезінде автоматты сұрыпталатын элементтер", isCorrect: false },
      { text: "C) өңделетін алгебралық өрнектердің символдық атауы", isCorrect: false },
      { text: "E) хат жазу кезінде қолданушымен басылған перне", isCorrect: false }
    ]
  },
  {
    question: "Кезек қарапайым тиімді қасиетке не",
    answers: [
      { text: "D) кезектің соңынан жүктеуді қамтамасыз етеді", isCorrect: true },
      { text: "A) LIFO қасиетін қолданады", isCorrect: false },
      { text: "B) кезек басынан жүктеуді қамтамасыз етеді", isCorrect: false },
      { text: "C) n-1 ден артық емес элементтер сыйғызады", isCorrect: false },
      { text: "E) кезектің екі шетінен жүктеуді қамтамасыз етеді", isCorrect: false }
    ]
  },
  {
    question: "Күрделілігі орташа жағдайда O(n²) болатын сұрыптау алгоритмі",
    answers: [
      { text: "жылдам", isCorrect: true },
      { text: "біріктіру", isCorrect: false },
      { text: "екілік ағаш", isCorrect: false },
      { text: "пирамидалық", isCorrect: false },
      { text: "таңдау", isCorrect: false }
    ]
  },
  {
    question: "Көшіру орын ауыстыруға қарағанда орындалу тездігі",
    answers: [
      { text: "үш есе", isCorrect: true },
      { text: "он есе", isCorrect: false },
      { text: "екі есе", isCorrect: false },
      { text: "жүз есе", isCorrect: false },
      { text: "бес есе", isCorrect: false }
    ]
  },
  {
    question: "Программаның бүкіл мәтінін машиналық тілге аударылуын қамтамасыз ететін программа",
    answers: [
      { text: "компилятор", isCorrect: true },
      { text: "интерпретатор", isCorrect: false },
      { text: "транслятор", isCorrect: false },
      { text: "қолданбалы программа", isCorrect: false },
      { text: "жүйелік программа", isCorrect: false }
    ]
  },
  {
    question: "Программаның нұсқауларын машиналық тілге тізбектей аударылуын қамтамасыз ететін программа",
    answers: [
      { text: "интерпретатор", isCorrect: true },
      { text: "компилятор", isCorrect: false },
      { text: "қолданбалы программа", isCorrect: false },
      { text: "жүйелік программа", isCorrect: false },
      { text: "транслятор", isCorrect: false }
    ]
  },
  {
    question: "1000-ға дейінгі элементтерді сұрыптаудың тәжірибедегі ең жылдам алгоритмі",
    answers: [
      { text: "қою арқылы сұрыптау", isCorrect: true },
      { text: "шеллдік сұрыптау", isCorrect: false },
      { text: "пирамидалық сұрыптау", isCorrect: false },
      { text: "күрделі сұрыптау", isCorrect: false },
      { text: "жылдам сұрыптау", isCorrect: false }
    ]
  },
  {
    question: "Алгоритмнің күрделілігінің кластары",
    answers: [
      { text: "кубтық, квадраттық, константалы", isCorrect: true },
      { text: "ескірген, жақсартылған", isCorrect: false },
      { text: "максималды, минималды", isCorrect: false },
      { text: "қиын, өте қиын", isCorrect: false },
      { text: "оңай, күрделі", isCorrect: false }
    ]
  },
  {
    question: "int func(char x, float v, double t); функциясының мәнінің типі",
    answers: [
      { text: "int", isCorrect: true },
      { text: "char", isCorrect: false },
      { text: "double", isCorrect: false },
      { text: "string", isCorrect: false },
      { text: "float", isCorrect: false }
    ]
  },
  {
    question: "Функцияның ішінде ғана белгілі, соның ішінде анықталатын айнымалы атауы",
    answers: [
      { text: "жергілікті айнымалы", isCorrect: true },
      { text: "ауқымды айнымалы", isCorrect: false },
      { text: "белгісіз айнымалы", isCorrect: false },
      { text: "белгілі айнымалы", isCorrect: false },
      { text: "рекурсиялық айнымалы", isCorrect: false }
    ]
  },
  {
    question: "Қысқа жолды іздеу тапсырмасында Дейкстр алгоритмінің орнына қолданылатын алгоритм",
    answers: [
      { text: "Беллман-Форд алгоритмі", isCorrect: true },
      { text: "Шелл алгоритмі", isCorrect: false },
      { text: "Штрассен алгоритмі", isCorrect: false },
      { text: "Чудновск алгоритмі", isCorrect: false },
      { text: "Крускал алгоритмі", isCorrect: false }
    ]
  },
  {
    question: "Программада жіберілген қате\n#include <stdio.h>\n#include <iostream>\nusing namespace std;\nstatic int a = 0;\nvoid func(int a) {\n    f(a); }\nvoid f(int a) {\n    cout << a;}\nint main() {\n func(a);\n return 0;}",
    answers: [
      { text: "extern void f(int);", isCorrect: true },
      { text: "extern", isCorrect: false },
      { text: "extern f(int)", isCorrect: false },
      { text: "extern f();", isCorrect: false },
      { text: "extern int main()", isCorrect: false }
    ]
  },
  {
    question: "Программалау парадигмасы",
    answers: [
      { text: "программаның жазылу стилін анықтайтын нұсқаулықтар, ережелердің және идеялардың жиынтығы", isCorrect: true },
      { text: "объектілер туралы анықтама", isCorrect: false },
      { text: "мақсатқа жетуге бағытталған, орындаушыға айқын жазылған және нақты командалар", isCorrect: false },
      { text: "мәліметтердің ашылуы және олардың сипаттамасы", isCorrect: false },
      { text: "орындаушыға орындалу үшін берілетін командалар", isCorrect: false }
    ]
  },
  {
    question: "Символдық типтегі шамаларға компьютер жадысында бөлінетін байт мөлшері",
    answers: [
      { text: "1", isCorrect: true },
      { text: "256", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "10", isCorrect: false },
      { text: "0", isCorrect: false }
    ]
  }
];

export default quizDataAlgorithm;