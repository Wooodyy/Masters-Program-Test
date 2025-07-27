const quizDataDataBase = [
  {
    question: "Оқытушы байланысын бейнелейтін атшылар тізімінен тұратын деректер моделі",
    answers: [
      { text: "объектіге бағытталған", isCorrect: true },
      { text: "иерархиялық", isCorrect: false },
      { text: "кестелік", isCorrect: false },
      { text: "ER", isCorrect: false },
      { text: "желілік", isCorrect: false },
      { text: "реляциялық", isCorrect: false }
    ]
  },
  {
    question: "Біріктіру (union) амалын сипаттаңыз",
    answers: [
      { text: "бірінші және екінші жиынға кіретін барлық кортеждер жиыны", isCorrect: true },
      { text: "екі кестенің де кіретін кортеждер жиыны", isCorrect: false },
      { text: "екінші кестенің кіретін, бірақ екіншісіне кірмейтін кортеждер жиыны", isCorrect: false },
      { text: "барлық шартты қанағаттандыратын кортеждер жиыны", isCorrect: false },
      { text: "бірінші шартты қанағаттандыратын кортеждер жиыны", isCorrect: false },
      { text: "екінен бір кестенің барлығын кортеждер жиыны", isCorrect: false }
    ]
  },
  {
    question: "Жиыннан элементтерді тек берілген шарт бойынша іріктеп алу амалы",
    answers: [
      { text: "таңдау", isCorrect: true },
      { text: "INTERSECT", isCorrect: true },
      { text: "қию", isCorrect: true },
      { text: "айырмашылық", isCorrect: false },
      { text: "Декарт көбейтіндісі", isCorrect: false },
      { text: "проекция", isCorrect: false },
      { text: "біріктіру", isCorrect: false },
      { text: "қарыс-қатынастарды біріктіру", isCorrect: false }
    ]
  },
  {
    question: "Жалғыз мәнді атрибут",
    answers: [
      { text: "адамның жасы", isCorrect: true },
      { text: "білім алу дипломы", isCorrect: false },
      { text: "тауарлардың тізімі", isCorrect: false },
      { text: "телефон нөмірі", isCorrect: false },
      { text: "факультет жетекшісі", isCorrect: false },
      { text: "студенттер тізімі", isCorrect: false }
    ]
  },
  {
    question: "Кітаптың аты мен авторын тізім",
    answers: [
      { text: "SELECT B.Title, A.Author FROM BOOKS AS B, UNNEST(B.AuthArray) AS A(Author);", isCorrect: true },
      { text: "SELECT B.Title FROM BOOKS AS B, UNNEST(B.AuthArray) AS A(Title);", isCorrect: false },
      { text: "SELECT B.Title, A.Author FROM BOOKS AS B, NOT UNNEST(B.AuthArray) AS A(Author);", isCorrect: false },
      { text: "SELECT B.Title, A.Author FROM BOOKS AS B, BOOKS AS A(Author);", isCorrect: false },
      { text: "SELECT B.Title FROM BOOKS AS B;", isCorrect: false },
      { text: "SELECT B.Title FROM BOOKS AS A;", isCorrect: false }
    ]
  },
  {
    question: "Сыртқы кілтті құру шарты",
    answers: [
      { text: "байланысқан кестенің бастапқы кілтінің типіне сай болу", isCorrect: true },
      { text: "кестелерді байланыстыруда қолданылмайды", isCorrect: false },
      { text: "кілтжазбаларды бірегей анықтауға мүмкіндік береді", isCorrect: false },
      { text: "кілтжазбалар белгісіз формаға келтіруге қолданылады", isCorrect: false },
      { text: "байланысқан кестедегі NULL мәндерінен тұрады", isCorrect: false },
      { text: "байланысқан кестенің әлеуетті кілтіне тәуелді болма", isCorrect: false }
    ]
  },
  {
    question: "Биология кафедрасының оқытушылары",
    answers: [
      { text: "SELECT * FROM INSTRUCTOR WHERE DeptName <> 'Биология';", isCorrect: false },
      { text: "SELECT * FROM INSTRUCTOR WHERE DeptName = 'Биология';", isCorrect: true },
      { text: "SELECT Name FROM INSTRUCTOR GROUP BY DeptName;", isCorrect: false },
      { text: "SELECT Name FROM INSTRUCTOR WHERE DeptName = 'Биология';", isCorrect: true },
      { text: "SELECT Name FROM INSTRUCTOR;", isCorrect: false },
      { text: "SELECT Name FROM INSTRUCTOR GROUP BY DeptName = 'Биология';", isCorrect: false }
    ]
  },
  {
    question: "LIKE 'ab%ch%' үлгісіне берілген босқа",
    answers: [
      { text: "abcd тіркесі жоқ жазбалардан тұрады", isCorrect: false },
      { text: "“ab”-мен басталып, “cd”-мен аяқталады", isCorrect: false },
      { text: "“ab\\%cd” деген тіркесті қарастырады", isCorrect: true },
      { text: "“ab%cd” тіркесімен басталады", isCorrect: false },
      { text: "“abcd” тіркесімен басталады", isCorrect: false },
      { text: "“abcd” тіркесімен аяқталады", isCorrect: false }
    ]
  },
  {
    question: "Бөлім бөлімше, өз бөлімінің ішіндегі жұмысшы фамилиясы, аты, жобадағы рөлі бойынша сұрыпталып және жұмыс істейтін проект тізімі",
    answers: [
      { text: "SELECT D.Dname, E.Lname, E.Fname, P.Pname FROM DEPARTMENT AS D, EMPLOYEE AS E, WORKS_ON AS W, PROJECT AS P WHERE D.Dnumber = E.Dno AND E.Ssn = W.Essn AND W.Pno = P.Pnumber ORDER BY D.Dname, E.Lname, E.Fname;", isCorrect: true },
      { text: "SELECT D.Dname, E.Lname, E.Fname, P.Pname FROM DEPARTMENT AS D, EMPLOYEE AS E, WORKS_ON AS W, PROJECT AS P WHERE D.Dno = E.Dno OR E.Ssn = W.Essn OR W.Pno = P.Pnumber", isCorrect: false },
      { text: "SELECT D.Dname, E.Lname, E.Fname, P.Pname FROM DEPARTMENT AS D, EMPLOYEE AS E, WORKS_ON AS W, PROJECT AS P", isCorrect: false },
      { text: "SELECT D.Dname, E.Lname, E.Fname, P.Pname FROM DEPARTMENT AS D, EMPLOYEE AS E, WORKS_ON AS W, PROJECT AS P WHERE D.Dnumber = E.Dno AND E.Ssn = W.Essn AND W.Pno = P.Pnumber", isCorrect: false },
      { text: "SELECT D.Dname, E.Lname, E.Fname, P.Pname FROM DEPARTMENT AS D, EMPLOYEE AS E, WORKS_ON AS W, PROJECT AS P WHERE D.Dno = E.Dno AND E.Ssn = W.Essn AND W.Pno = P.Pnumber", isCorrect: false },
      { text: "SELECT D.Dname, E.Lname, E.Fname, P.Pname FROM DEPARTMENT AS D, EMPLOYEE AS E, WORKS_ON AS W, PROJECT AS P WHERE D.Dnumber = E.Dno AND E.Ssn = W.Essn AND W.Pno = P.Pnumber GROUP BY D.Dname, E.Lname, E.Fname", isCorrect: false }
    ]
  },
  {
    question: "Келесі сұраныстың нәтижесі SELECT Semester, COUNT(*) AS '60-тан көп сағаттар саны' FROM UCHPLAN WHERE Hours > 60 GROUP BY ALL Semester;",
    answers: [
      { text: "Әр семестрдегі сабақтар санының орташа мәнін шығарады", isCorrect: false },
      { text: "Әр семестрдегі сағат саны 60 тан аз болатын сабақтар санын шығарады", isCorrect: true },
      { text: "Барлық семестрлердегі сағат саны 60-тан көп сағаттар санын шығарады", isCorrect: false },
      { text: "Әр семестрдегі сағат саны 60-тан кем болатын сабақтар санын шығарады", isCorrect: false },
      { text: "Әр семестрдегі сағат саны 60-қа тең болатын сабақтар санын шығарады", isCorrect: false },
      { text: "Әр семестрдегі сабақтар саны және олардың атауларын шығарады", isCorrect: false }
    ]
  },
  {
    question: "Әр проект үшін проект номері, аты және сол проекте істеген жұмысшылар саны",
    answers: [
      { text: "SELECT Pnum, Pname, COUNT(*) FROM PROJECT, WORKS_ON WHERE Pnum=Pno GROUP BY Pnum, Pname", isCorrect: true },
      { text: "SELECT Pnum, Pname, COUNT(*) FROM PROJECT, WORKS_ON WHERE Pnum=Pno HAVING COUNT(*) > 2", isCorrect: false },
      { text: "SELECT Pnum, Pname, COUNT(*) FROM PROJECT, WORKS_ON WHERE Pnum==Pno", isCorrect: false },
      { text: "SELECT Pnum, Pname, COUNT FROM PROJECT, WORKS_ON WHERE Pnum==Pno", isCorrect: false },
      { text: "SELECT Pnum, Pname, COUNT(Employers) FROM PROJECT, WORKS_ON WHERE Pnum=Pno", isCorrect: false },
      { text: "SELECT Pnumber, Pname, COUNT(*) FROM PROJECT, WORKS_ON, EMPLOYEE WHERE Pnumber = Pno AND Ssn = Essn AND Dno = 5", isCorrect: false }
    ]
  },
  {
    question: "Кесте құру барысында осы кілттік сөз арқылы негізгі кестедегі жол өшірілсе, онда байланысқан кестедегі жол да жойылады",
    answers: [
      { text: "ON DELETE CASCADE", isCorrect: true },
      { text: "ON UPDATE CASCADE", isCorrect: false },
      { text: "FOREIGN KEY", isCorrect: false },
      { text: "ON UPDATE NO ACTION", isCorrect: false },
      { text: "DELETE", isCorrect: false },
      { text: "CHECK", isCorrect: false },
      { text: "ON DELETE NO ACTION", isCorrect: false },
      { text: "PRIVATE KEY", isCorrect: false }
    ]
  },
  {
    question: "Студенттер кестесінде стипендия мәні 25000 болатындарды екі есеге көбейту",
    answers: [
      { text: "UPDATE STUDENTS SET STIP = STIP * 2 WHERE STIP = 25000;", isCorrect: true },
      { text: "CREATE STUDENTS SET STIP = STIP * 2 WHERE STIP = 25000;", isCorrect: false },
      { text: "INSERT INTO STUDENTS SET STIP = STIP * 2 WHERE STIP = 25000;", isCorrect: false },
      { text: "DELETE STUDENTS WHERE STIP = 25000;", isCorrect: false },
      { text: "INSERT STUDENTS SET STIP = STIP * 2 WHERE STIP = 25000;", isCorrect: false },
      { text: "UPDATE STUDENTS SELECT STIP = STIP * 2 WHERE STIP = 25000;", isCorrect: false }
    ]
  },
  {
    question: "2003 жылғы сабақтан барлық студенттердің бағасын NULL-ға өзгерту",
    answers: [
      { text: "UPDATE USP SET Ocenka = NULL WHERE Pnum = 2003;", isCorrect: true },
      { text: "INSERT USP SET Ocenka = NULL WHERE Pnum > 2003;", isCorrect: false },
      { text: "CREATE USP SET Ocenka = NULL WHERE Pnum = 2003;", isCorrect: false },
      { text: "INSERT INTO USP SET Ocenka = NULL WHERE Pnum = 2003;", isCorrect: false },
      { text: "UPDATE USP SET Ocenka = NULL WHERE Pnum > 2003;", isCorrect: false },
      { text: "INSERT INTO USP SET Ocenka = NULL;", isCorrect: false }
    ]
  },
  {
    question: "UNIQUE кілттік сөзін қолданып, 2021 жылы бір рет қана оқылған пәндер",
    answers: [
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE UNIQUE (SELECT R.CourseId FROM SECTION AS R WHERE T.CourseId = R.CourseId AND R.Year = 2021);", isCorrect: true },
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE UNIQUE (SELECT R.CourseId FROM SECTION AS R WHERE T.CourseId = R.CourseId OR R.Year = 2021);", isCorrect: false },
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE NOT UNIQUE (SELECT R.CourseId FROM SECTION AS R WHERE T.CourseId = R.CourseId AND R.Year = 2021);", isCorrect: false },
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE SOME (SELECT R.CourseId FROM SECTION AS R WHERE T.CourseId = R.CourseId AND R.Year = 2021);", isCorrect: false },
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE UNIQUE (SELECT CourseId FROM SECTION AS R WHERE CourseId = CourseId AND Year = 2021);", isCorrect: false },
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE UNION (SELECT R.CourseId FROM SECTION AS R WHERE T.CourseId = R.CourseId AND R.Year = 2021);", isCorrect: false }
    ]
  },
  {
    question: "2021 жылы бір рет қана оқылған пәндер",
    answers: [
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE 1 = (SELECT COUNT(R.CourseId) FROM SECTION AS R WHERE T.CourseId = R.CourseId AND R.Year = 2021);", isCorrect: true },
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE T.CourseId = R.CourseId OR R.Year = 2021;", isCorrect: false },
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE 1 <= (SELECT COUNT(R.CourseId) FROM SECTION AS R WHERE T.CourseId = R.CourseId AND R.Year = 2021);", isCorrect: false },
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE T.CourseId = R.CourseId;", isCorrect: false },
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE 1 <= (SELECT COUNT(R.CourseId) FROM SECTION AS R WHERE CourseId = CourseId AND Year = 2021);", isCorrect: false },
      { text: "SELECT T.CourseId FROM COURSE AS T WHERE 1 = (SELECT COUNT(R.CourseId) FROM SECTION AS R WHERE R.Year = 2021);", isCorrect: false }
    ]
  },
  {
    question: "Философия пәнінің қолданыс уақыты 1 сағатқа кем сабақ туралы ақпарат",
    answers: [
      { text: "SELECT * FROM PREDMET WHERE Pnum = (SELECT Pnum-1 FROM PREDMET WHERE Pname = 'Философия');", isCorrect: true },
      { text: "SELECT * FROM PREDMET WHERE Pnum <= (SELECT Pnum-1 FROM PREDMET WHERE Pname = 'Философия');", isCorrect: false },
      { text: "SELECT * FROM PREDMET WHERE Pnum = Pnum-1;", isCorrect: false },
      { text: "SELECT * FROM PREDMET WHERE (SELECT Pnum-1 FROM PREDMET) WHERE Pname = 'Философия';", isCorrect: false },
      { text: "SELECT * FROM PREDMET WHERE Pname = 'Философия';", isCorrect: false },
      { text: "SELECT * FROM PREDMET WHERE Pnum = (SELECT Pnum-1 FROM PREDMET);", isCorrect: false }
    ]
  },
  {
    question: "1НФ",
    answers: [
      { text: "логикалық бөлінбейтін мәндерге ие қатынас", isCorrect: true },
      { text: "кілттік емес атрибуттары толығымен бастамқы кілтке тәуелді қатынас", isCorrect: false },
      { text: "кілттік емес атрибуттар оларға тәуелді емес қатынас", isCorrect: false },
      { text: "кестелер бір кестеге біріктірілетін қатынас", isCorrect: false },
      { text: "тұтастық сақталайтын қатынас", isCorrect: false },
      { text: "логикалық бөлінетін мәндерге ие қатынас", isCorrect: false }
    ]
  },
  {
    question: "Скалярлық қатынас",
    answers: [
      { text: "сыртқы кілттік емес атрибуттары толығымен бастапқы кілтке тәуелді", isCorrect: true },
      { text: "кілттік емес атрибуттар толығымен бастапқы кілтке тәуелді", isCorrect: false },
      { text: "кестелер бір кестеге біріктіріледі", isCorrect: false },
      { text: "логикалық бөлінбейтін мәндерге ие қатынас", isCorrect: false },
      { text: "логикалық бөлінбейтін мәндерге ие", isCorrect: false },
      { text: "логикалық емес бөлінбейтін мәндерге ие қатынас", isCorrect: false }
    ]
  },
  {
    question: "Денормализация пайда болатын аномалия",
    answers: [
      { text: "қосу аномалиясы", isCorrect: true },
      { text: "енгізу аномалиясы", isCorrect: true },
      { text: "жаңарту аномалиясы", isCorrect: true },
      { text: "нөлдеу аномалиясы", isCorrect: false },
      { text: "өзгерту аномалиясы", isCorrect: false },
      { text: "көшіру аномалиясы", isCorrect: false }
    ]
  },
  {
    question: "Денормализация",
    answers: [
      { text: "кестелерден артық деректерді жоя отырып, деректердің сақталу қабілеттілігін, деректердің тұтастығын және масштабталу қабілетін арттыру", isCorrect: true },
      { text: "күрделі деректер құрылымын қарапайым, тұрақты деректер құрылымына өткізу процесі", isCorrect: false },
      { text: "нормализация деректердің оқылу жылдамдығын арттыру үшін қолданылатын стратегия", isCorrect: false },
      { text: "бар кестелерді бірнеше кестеге бөліп шығарып, бұл кестелерді тек қана сұраныс арқылы байланыстыру", isCorrect: false },
      { text: "лас деректерді форматтау", isCorrect: false },
      { text: "лас деректерді жою", isCorrect: false }
    ]
  },
  {
    question: "Детерминант",
    answers: [
      { text: "қатынастың барлық функционалдық тәуелділіктері мәнге ие болса", isCorrect: true },
      { text: "кілттік емес атрибуттар толықымен бастапқы кілтке тәуелді болса", isCorrect: false },
      { text: "қатынаста функционалдық тәуелділіктер olмаса", isCorrect: false },
      { text: "қатынас логикалық бөлінібейтін мәндерден тұрса", isCorrect: false },
      { text: "бір атрибут басқа атрибутқа толықтай функционалды тәуелді болса", isCorrect: false },
      { text: "қатынастағы кез-келген байланыс тәуелділігі осы қатынаста болса", isCorrect: false }
    ]
  },
  {
    question: "3НФ",
    answers: [
      { text: "2НФ-те болатын және кілттік емес атрибуттары толықымен бастапқы кілтке тәуелді", isCorrect: true },
      { text: "2НФ-те болатын және кілттік атрибуттары өзара байланысқан", isCorrect: false },
      { text: "2НФ-те болатын және кілттік емес атрибуттар өзара тәуелсіз", isCorrect: false },
      { text: "2НФ-те болатын және логикалық бөлінбейтін мәндерге ие қатынас", isCorrect: false },
      { text: "2НФ-те болатын және кілттік емес атрибуттар тәуелді емес", isCorrect: false },
      { text: "2НФ-те болатын және логикалық бөлінбейтін мәндерге ие қатынас", isCorrect: false }
    ]
  },
  {
    question: "110011 нөмірлі оқытушы оқытқан курстарды оқыған студенттер саны",
    answers: [
      { text: "SELECT COUNT (DISTINCT Id) FROM TAKES WHERE (CourseId, SecId, Semester, Year) IN (SELECT CourseId, SecId, Semester, Year FROM TEACHES WHERE TEACHES.Id = 110011);", isCorrect: true },
      { text: "SELECT COUNT (DISTINCT Id) FROM TAKES WHERE (CourseId, SecId) IN (LIKE CourseId, SecId, Semester, Year FROM TEACHES WHERE TEACHES.Id= 110011);", isCorrect: false },
      { text: "CREATE COUNT (DISTINCT Id) FROM TAKES WHERE (CourseId, SecId, Semester, Year) IN (SELECT CourseId, SecId, Semester, Year FROM TEACHES WHERE TEACHES.Id= 110011);", isCorrect: false },
      { text: "SELECT AVG (DISTINCT Id) FROM TAKES WHERE (CourseId, SecId, Semester, Year) IN (SELECT CourseId FROM TEACHES WHERE TEACHES.Id= 110011);", isCorrect: false },
      { text: "SELECT COUNT (DISTINCT Id) FROM TAKES WHERE (CourseId, SecId, Semester, Year) SOME (SELECT CourseId, SecId, Semester, Year FROM TEACHES HAVING TEACHES.Id = 110011);", isCorrect: false },
      { text: "SELECT COUNT (DISTINCT Id) FROM TAKES WHERE (CourseId, SecId, Semester, Year) ANY (SELECT CourseId, SecId, Semester, Year FROM TEACHES WHERE TEACHES.Id= 110011);", isCorrect: false }
    ]
  },
  {
    question: "Орташа жалақысы 200 000-нан көп болатын бөлімдердің орташа жалақысы",
    answers: [
      { text: "SELECT DeptName, AVG(Salary) AS AvgSalary FROM INSTRUCTOR HAVING AVG(Salary) > 200000;", isCorrect: true },
      { text: "SELECT DeptName, SUM(Salary) AS AvgSalary FROM INSTRUCTOR HAVING SUM(Salary) > 200000;", isCorrect: false },
      { text: "SELECT DeptName, AVG(Salary) AS AvgSalary FROM INSTRUCTOR HAVING Salary > 200000;", isCorrect: false },
      { text: "SELECT DeptName, Salary AS AvgSalary FROM INSTRUCTOR HAVING AVG(Salary) > 200000;", isCorrect: false },
      { text: "SELECT DeptName, AvgSalary FROM (SELECT DeptName, AVG(Salary) AS AvgSalary) WHERE AvgSalary > 200000;", isCorrect: false },
      { text: "SELECT DeptName, AvgSalary FROM (SELECT DeptName, AVG(Salary) AS AvgSalary FROM INSTRUCTOR) WHERE AvgSalary > 200000;", isCorrect: false }
    ]
  },
  {
    question: "Бөлшектер санының қосындысының арифметикалық ортасын табу",
    answers: [
      { text: "SELECT AVG(X) FROM (SELECT SUM(SP.QTY) AS X FROM SP GROUP BY SP.S#) AS POINTLESS;", isCorrect: true },
      { text: "SELECT X FROM (SELECT SUM(SP.QTY) AS X FROM SP GROUP BY SP.S#) AS POINTLESS;", isCorrect: false },
      { text: "SELECT MAX(X) FROM (SELECT SUM(SP.QTY) FROM SP GROUP BY SP.S#) AS POINTLESS;", isCorrect: false },
      { text: "SELECT MAX(X) FROM (SELECT SUM(SP.QTY) AS X FROM SP) AS POINTLESS;", isCorrect: false },
      { text: "SELECT SUM(X) FROM (SELECT SUM(SP.QTY) AS X FROM SP GROUP BY SP.S#) AS POINTLESS;", isCorrect: false },
      { text: "SELECT AVG(X) FROM (SELECT SUM(SP.QTY) AS X FROM SP ORDER BY SP.S#) AS POINTLESS;", isCorrect: false }
    ]
  },
  {
    question: "Студенттер стипендиясын екі есе еткенін кестеде сақтау",
    answers: [
      { text: "UPDATE STUDENTS SET STIP = STIP * 2;", isCorrect: true },
      { text: "INSERT INTO STUDENTS SET STIP = STIP * 2;", isCorrect: false },
      { text: "UPDATE STUDENTS WHERE STIP = STIP * 2;", isCorrect: false },
      { text: "INSERT INTO STUDENTS WHERE STIP = STIP ** 2;", isCorrect: false },
      { text: "UPDATE STUDENTS SET STIP = STIP ** 2;", isCorrect: false },
      { text: "CREATE STUDENTS SET STIP = STIP * 0.2;", isCorrect: false }
    ]
  },
  {
    question: "Құрылған кестеге жаңа баған қосу үшін қолданылатын параметр",
    answers: [
      { text: "ADD", isCorrect: true },
      { text: "DROP", isCorrect: false },
      { text: "DRUG", isCorrect: false },
      { text: "CREATE", isCorrect: false },
      { text: "INSERT", isCorrect: false },
      { text: "NEW", isCorrect: false }
    ]
  },
  {
    question: "INSERT командасы",
    answers: [
      { text: "кестеге жаңа элементтер қосу", isCorrect: true },
      { text: "бір кестеден екіншіге мәліметтерді көшіру", isCorrect: false },
      { text: "кестеден мәліметтерді жою", isCorrect: false },
      { text: "топтастыру", isCorrect: false },
      { text: "кестедегі мәліметтерді жаңарту", isCorrect: false },
      { text: "кестелерді байланыстыру", isCorrect: false }
    ]
  },
  {
    question: "Әр проект үшін проект нөмірі, аты және сол проектте 5-нөмірдегі бөлімде істейтін жұмысшылар саны",
    answers: [
      { text: "SELECT Pnum, Pname, COUNT(*) FROM PROJECT, WORKS_ON WHERE Pnum=Pno HAVING Dno = 5", isCorrect: true },
      { text: "SELECT Pnumber, Pname, AVG (Pname) FROM PROJECT, WORKS_ON, EMPLOYEE WHERE Pnumber = Pno OR Ssn = Essn OR Dno = 5", isCorrect: false },
      { text: "SELECT Pnumber, Pname, COUNT (*) FROM PROJECT, WORKS_ON, EMPLOYEE WHERE Pnumber = Pno OR Ssn = Essn OR Dno = 5", isCorrect: false },
      { text: "SELECT Pnum, Pname, COUNT(Employers) FROM PROJECT, WORKS_ON WHERE Pnum=Pno HAVING Dno = 5", isCorrect: false },
      { text: "SELECT Pnumber, Pname, COUNT (*) FROM PROJECT, WORKS_ON, EMPLOYEE WHERE Pnumber = Pno AND Ssn = Essn AND Dno = 5", isCorrect: false },
      { text: "SELECT Pnum, Pname, COUNT(*) FROM PROJECT, WORKS_ON WHERE Dno = 5", isCorrect: false }
    ]
  },
  {
    question: "3512 және 3513 нөмірі студенттердің алған минималды бағалары",
    answers: [
      { text: "SELECT Snum, MIN(Ocenka) FROM USP HAVING Snum IN (3512, 3513);", isCorrect: true },
      { text: "SELECT Snum, MAX(Ocenka) FROM USP;", isCorrect: false },
      { text: "SELECT Snum, MIN(Ocenka) FROM USP;", isCorrect: false },
      { text: "SELECT Snum, MIN(Ocenka) FROM USP HAVING Snum BETWEEN (3512, 3513);", isCorrect: false },
      { text: "SELECT Snum, MIN(Ocenka) FROM USP HAVING Snum NOT IN (3512, 3513);", isCorrect: false },
      { text: "SELECT Snum, AVG(Ocenka) FROM USP;", isCorrect: false }
    ]
  },
  {
    question: "«LIKE '___%'» түрінде берілсе",
    answers: [
      { text: "3 символдан кең символдары тіркесі", isCorrect: true },
      { text: "'...%' символдарынан басталатын жолдар", isCorrect: false },
      { text: "3 символдан тұратын жол", isCorrect: false },
      { text: "3 символдан кең символдардан тұратын жол", isCorrect: false },
      { text: "'...%' символдары тіркесі бар жолдар", isCorrect: false },
      { text: "'___' символдарынан басталатын жолдар", isCorrect: false }
    ]
  },
  {
    question: "Әр студенттің әр күніне алған минималды бағасы",
    answers: [
      { text: "SELECT Snum, Udate, MIN(Ocenka) FROM USP", isCorrect: true },
      { text: "SELECT Snum, Udate, MAX(Ocenka) FROM USP", isCorrect: false },
      { text: "SELECT Snum FROM USP", isCorrect: false },
      { text: "SELECT Snum, Udate, MIN(Ocenka+1) FROM USP", isCorrect: false },
      { text: "SELECT Snum, Udate, AVG(Ocenka) FROM USP", isCorrect: false },
      { text: "SELECT Snum, Udate, MIN(Ocenka-1) FROM USP", isCorrect: false }
    ]
  },
  {
    question: "\"Зауыт\" бөлімінде істейтін қызметкерлердің аты және үйі жөніндегі сұраныс",
    answers: [
      { text: "SELECT Fname, Lname, Address FROM EMPLOYEE WHERE Dname = 'завод' AND Dnum = Dno;", isCorrect: true },
      { text: "SELECT Fname, Lname, Address FROM EMPLOYEE WHERE Dname = 'завод' AND Dnum = Dno;", isCorrect: false },
      { text: "SELECT Fname, Lname, Address FROM EMPLOYEE, DEPARTMENT WHERE Dname = 'завод' NOT Dnum = Dno;", isCorrect: false },
      { text: "SELECT Fname, Lname, Address FROM EMPLOYEE, DEPARTMENT WHERE Dname = 'завод' AND Dnumber = Dno;", isCorrect: false },
      { text: "SELECT Fname, Lname, Address FROM EMPLOYEE, DEPARTMENT WHERE Dname = 'завод' AND Dnumber != Dno;", isCorrect: false }
    ]
  },
  {
    question: "Агрегаттық функция",
    answers: [
      { text: "COUNT", isCorrect: true },
      { text: "SUM", isCorrect: true },
      { text: "AVG", isCorrect: true },
      { text: "GROUP BY", isCorrect: false },
      { text: "HAVING", isCorrect: false },
      { text: "ADD", isCorrect: false },
      { text: "AS", isCorrect: false },
      { text: "WHERE", isCorrect: false }
    ]
  },
  {
    question: "Бірнеше жазбаны біріктіретін құрылымдық компонент",
    answers: [
      { text: "байланыс", isCorrect: true },
      { text: "қасиет", isCorrect: false },
      { text: "қатынас", isCorrect: false },
      { text: "жазба", isCorrect: false },
      { text: "агрегация", isCorrect: false },
      { text: "кілт", isCorrect: false }
    ]
  },
  {
    question: "Егер R қатынасында X,Y, Z атрибуттары берілсе, тұжырымдау тәуелділігі",
    answers: [
      { text: "X→Y және Y→Z функционалдық тәуелділігі болса, онда X→Z болады", isCorrect: true },
      { text: "X→Z және Y→Z функционалдық тәуелділік болса, онда X→Z болмайды", isCorrect: false },
      { text: "X→Z функционалдық тәуелділік шартı орындалса, онда X→Y болады", isCorrect: false },
      { text: "X→ және Y→Z функционалдық тәуелділік болса, онда Y→X болады", isCorrect: false },
      { text: "Y→Z функционалдық тәуелділік шартı орындалса, онда X→Y болады", isCorrect: false },
      { text: "X→Z функционалдық тәуелділік шартı орындалса, онда X→ болады", isCorrect: false }
    ]
  },
  {
    question: "Бірінші жиынға кіретін, бірақ екінші жиынға кірмейтін элементтерді таңдайтын реляциялық алгебраның амалы",
    answers: [
      { text: "айырмашылық", isCorrect: true },
      { text: "талдау", isCorrect: false },
      { text: "қарым-қатынастарды біріктіру", isCorrect: false },
      { text: "қиылысу", isCorrect: false },
      { text: "проекция", isCorrect: false },
      { text: "Декарт көбейтіндісі", isCorrect: false },
      { text: "бөлу", isCorrect: false },
      { text: "UNION", isCorrect: false }
    ]
  },
  {
    question: "Әр түрлі ДҚБЖ бағдарламасын қолданатын үлестірілген ДҚБЖ",
    answers: [
      { text: "гетерогенді", isCorrect: true },
      { text: "график негізделген", isCorrect: false },
      { text: "локальды", isCorrect: false },
      { text: "объектіге негізделген", isCorrect: false },
      { text: "гомогенді", isCorrect: false },
      { text: "бір қолданушы жүйесі", isCorrect: false }
    ]
  },
  {
    question: "SQL сұранысындағы COUNT функциясы",
    answers: [
      { text: "Жазбалар саны есептеледі", isCorrect: true },
      { text: "Сандық атрибуттың орташа арифметикалық мәнін табады", isCorrect: false },
      { text: "Атрибуттарды топтау әдісі", isCorrect: false },
      { text: "Сандық атрибуттың максималды мәнін табады", isCorrect: false },
      { text: "Сандық атрибуттың минималды мәнін табады", isCorrect: false },
      { text: "Сандық атрибуттың мәндерінің қосындысын есептейді", isCorrect: false },
      { text: "Атрибут бойынша деректерге тәуелді болады", isCorrect: false },
      { text: "Атрибуттарды жіктеу әдісі", isCorrect: false }
    ]
  },
  {
    question: "Қатынас III қалыпты күйде болады",
    answers: [
      { text: "Қатынас II қалыпты күйде болса және кілттік емес атрибуттар кілттен транзитивтік тәуелді емес", isCorrect: true },
      { text: "Қайталанатын бағандар кездеседі", isCorrect: false },
      { text: "Қатынас IV қалыпты күйде болса және кілттік емес атрибуттар кілттен транзитивтік тәуелді", isCorrect: false },
      { text: "Атрибут бойынша жазбалар мен бағандар тәуелді болады", isCorrect: false },
      { text: "Атрибут бойынша деректерге тәуелді болады", isCorrect: false },
      { text: "Қайталанатын жолдар кездеседі", isCorrect: false },
      { text: "Атрибут бойынша жазбалар мен бағандар тәуелсіз болады", isCorrect: false },
      { text: "Қатынас II қалыпты күйде болса және атрибуттар арасында кемеңгей тәуелділік жоқ", isCorrect: false }
    ]
  },
  {
    question: "Corba технологиясы деректердің қолдайтын моделі",
    answers: [
      { text: "Нысанға бағытталған", isCorrect: true },
      { text: "Таратылған", isCorrect: true },
      { text: "Ашық", isCorrect: true },
      { text: "Тармақтық", isCorrect: false },
      { text: "Желідік", isCorrect: false },
      { text: "Шектелген", isCorrect: false },
      { text: "Орталықтанған", isCorrect: false },
      { text: "Қатынастық", isCorrect: false }
    ]
  },
  {
    question: "SQL сұранысындағы ORDER BY өрнегіндегі DESC кілттік сөзі нені білдіреді?",
    answers: [
      { text: "Жазбаларды кемуі бойынша реттейді", isCorrect: true },
      { text: "Атрибуттарды топтау әдісі", isCorrect: false },
      { text: "Шарт бойынша қайталанатын жазбаларды жояды", isCorrect: false },
      { text: "Шарт бойынша топтарды жояды", isCorrect: false },
      { text: "Жазбаларды өсуі бойынша реттейді", isCorrect: false },
      { text: "Реттеуді қайтарады", isCorrect: false },
      { text: "Атрибуттарды жіктеу әдісі", isCorrect: false },
      { text: "Атрибут бойынша деректерге тәуелді болады", isCorrect: false }
    ]
  },
  {
    question: "SQL-дің келесі операторларының орындалу нәтижесі қандай? SELECT ID, NAME, CITY, GROUP FROM STUDENT WHERE GROUP=1;",
    answers: [
      { text: "5, Almas, Aktau, 1", isCorrect: true },
      { text: "1, Alma, Almaty, 1", isCorrect: true },
      { text: "2, Zhanar, Kostanay, 1", isCorrect: true },
      { text: "Erbol, Atyrau, 26", isCorrect: false },
      { text: "Zhanna, Karaganda, 2", isCorrect: false },
      { text: "Aigul, Kostanay, 1, 2", isCorrect: false },
      { text: "Edige, Shymkent, 2, 5", isCorrect: false },
      { text: "Altyn, Oral, 2", isCorrect: false }
    ]
  },
  {
    question: "Кіріктірілген SQL сұранысының орындалуы барысында көрсетілетіні SELECT Қызметкер.Аты-жөні FROM Қызметкер WHERE Қызметкер.Қызметкер_коды <> ALL (SELECT Қызметкер_коды FROM Балалар);",
    answers: [
      { text: "Балалары жоқ қызметкерлер тізімі", isCorrect: true },
      { text: "Қызметкерлердің саны", isCorrect: false },
      { text: "Балалары бар қызметкерлер тізімі", isCorrect: false },
      { text: "Қызметкерлердің адресі", isCorrect: false },
      { text: "Қызметкерлердің тізімі", isCorrect: false },
      { text: "Балалардың тізімі", isCorrect: false },
      { text: "Қызметкерлердің балаларының тізімі", isCorrect: false }
    ]
  },
  {
    question: "Қатынастың мүмкін болатын кілті",
    answers: [
      { text: "Қатынастың басқа барлық атрибуттарының мәндерін бір мәнді және толықтай анықтайтын көрсеткіш тобы", isCorrect: true },
      { text: "Атрибуттар мәндері аномальды емес", isCorrect: false },
      { text: "Қатынастың көрсеткі бір мәнді анықтайды", isCorrect: false },
      { text: "Қатынаста ұқсас көрсеткі бар", isCorrect: false },
      { text: "Қатынастың басқа барлық атрибуттарының мәндерін бір мәнді және толықтай анықтайтын атрибуттар тобы", isCorrect: false },
      { text: "Қатынастың басқа барлық атрибуттарының мәндерін бір мәнді және толықтай анықтайтын домендер тобы", isCorrect: false },
      { text: "Қатынастың аталық қатынаста ғана кездесетін сыртқы кілттері", isCorrect: false }
    ]
  },
  {
    question: "Қатынастың алғашқы кілті",
    answers: [
      { text: "Қатынастың кортежін бір мәнді және толықтай анықтайды", isCorrect: true },
      { text: "Қатынастың алғашқы кілтінің мәні бойынша оған бірдей кортеж кездеспейді", isCorrect: true },
      { text: "Қатынаста ұқсас кортеж бар", isCorrect: false },
      { text: "Атрибуттар мәндері атомарлы емес", isCorrect: false },
      { text: "Қатынастың басқа барлық атрибуттарының мәндері", isCorrect: false },
      { text: "Қатынастың басқа барлық атрибуттарының мәндерін бір мәнді және толықтай анықтайтын домендер тобы", isCorrect: false },
      { text: "Қатынастың басқа барлық атрибуттарының мәндерін бір мәнді және толықтай анықтайтын кортеждер тобы", isCorrect: false },
      { text: "Қатынаста аталық қатынаста ғана кездесетін сыртқы кілттер", isCorrect: false }
    ]
  },
  {
    question: "SQL сұранысындағы ORDER BY өрнегіндегі ASC кілттік сөзі",
    answers: [
      { text: "Жазбаларды өсуі бойынша реттейді", isCorrect: true },
      { text: "Жазбаларды кемуі бойынша реттейді", isCorrect: false },
      { text: "Реттеуді қайтарады", isCorrect: false },
      { text: "Шарт бойынша топтарды жояды", isCorrect: false },
      { text: "Шарт бойынша қайталанатын жазбаларды жояды", isCorrect: false },
      { text: "Атрибут бойынша деректер тәуелді болады", isCorrect: false }
    ]
  },
  {
    question: "SQL сұранысындағы DISTINCT кілттік сөзі",
    answers: [
      { text: "Жазбалардың қайталануын болдырмайды", isCorrect: true },
      { text: "Атрибуттарды топтау әдісі", isCorrect: false },
      { text: "Жазбаларды топтайды", isCorrect: false },
      { text: "Шарт бойынша топтарды жояды", isCorrect: false },
      { text: "Шарт бойынша жазбаларды жояды", isCorrect: false },
      { text: "Атрибуттарды жіктеу әдісі", isCorrect: false },
      { text: "Атрибут бойынша деректер тәуелді болады", isCorrect: false }
    ]
  },
  {
    question: "SQL сұранысындағы AVERAGE функциясы",
    answers: [
      { text: "Сандық атрибуттың орташа арифметикалық мәнін табады", isCorrect: true },
      { text: "Атрибут бойынша деректер тәуелді болады", isCorrect: false },
      { text: "Сандық атрибуттың максималды мәнін табады", isCorrect: false },
      { text: "Сандық атрибуттың минималды мәнін табады", isCorrect: false },
      { text: "Атрибуттарды жіктеу әдісі", isCorrect: false },
      { text: "Атрибуттарды топтау әдісі", isCorrect: false },
      { text: "Сандық атрибуттың мәндерінің қосындысын есептейді", isCorrect: false }
    ]
  },
  {
    question: "Егер 1:1 бинарлы байланысының деректері және екі мәндіден де кластарға кіруі міндетті болса, онда ER-жобалау ережелеріне сәйкес жеткілікті",
    answers: [
      { text: "Бір қатынас", isCorrect: true },
      { text: "Төрт қатынас, әрбір мәнге екі қатынастан", isCorrect: false },
      { text: "Атрибут бойынша деректер тәуелді болады", isCorrect: false },
      { text: "Атрибуттарды жіктеу әдісі", isCorrect: false },
      { text: "Бір де бір қатынас", isCorrect: false },
      { text: "Екі қатынас – әрбір мәнге бір қатынастан", isCorrect: false },
      { text: "Атрибуттарды топтау әдісі", isCorrect: false }
    ]
  },
  {
    question: "ER – «мәнсіз – байланыс» әдісі",
    answers: [
      { text: "Деректер қорын жобалау әдісі", isCorrect: true },
      { text: "Атрибуттарды жіктеу әдісі", isCorrect: false },
      { text: "Жазбаларды топтау әдісі", isCorrect: false },
      { text: "Атрибуттарды топтау әдісі", isCorrect: false },
      { text: "Әмбебап қатынасты функционалдық тәуелділіктерді жоя отырып жіктеп бөлу әдісі", isCorrect: false },
      { text: "Программалық қамтаманы жобалау әдісі", isCorrect: false }
    ]
  },
  {
    question: "Деректердің қайталануынан туындайтын мәселелерді көрсетіңіз І - жасалған іс-әрекеттердің қайшылығы (бос кетуі) ІІ - деректерді сақтау орны дұрыс пайдаланылмаған ІІІ - деректердің қорға жиі енуі оның қарама-қайшылығын тудыруы мүмкін",
    answers: [
      { text: "І, ІІ, ІІІ", isCorrect: true },
      { text: "Тек қана ІІ", isCorrect: false },
      { text: "ІІІ, ІІІ", isCorrect: false },
      { text: "І, ІІ", isCorrect: false },
      { text: "Тек қана ІІІ", isCorrect: false },
      { text: "Тек қана І", isCorrect: false }
    ]
  },
  {
    question: "SQL сұраныста бағаннан көрсетілген үлгі бойынша іздеуді ұйымдастыру үшін қолданылатын сөйлемдер (предикаттар)",
    answers: [
      { text: "LIKE", isCorrect: true },
      { text: "ALIASE", isCorrect: false },
      { text: "UPDATE", isCorrect: false },
      { text: "PATTERN", isCorrect: false },
      { text: "RETURN", isCorrect: false },
      { text: "WHERE", isCorrect: false }
    ]
  },
  {
    question: "Қатынастың сұлбасы",
    answers: [
      { text: "Атрибут аттарының олар кіретін домендермен бірге көрсетілген тізімі", isCorrect: true },
      { text: "Қатынастың мүмкін кілттері", isCorrect: false },
      { text: "Қатынастағы аталық қатынаста ғана кездесетін сыртқы кілттер", isCorrect: false },
      { text: "Қатынасқа кіретін бағандар", isCorrect: false },
      { text: "Қатынасқа кіретін атрибуттар", isCorrect: false },
      { text: "Атрибуттар мәндері", isCorrect: false },
      { text: "Қатынасқа кіретін жолдар", isCorrect: false }
    ]
  },
  {
    question: "Деректер қорын басқару жүйесі (ДҚБЖ) дегеніміз не?",
    answers: [
      { text: "Деректер қорын құруға, қолдауға және ортақ жұмыс істеуге арналған жабдықтар кешені", isCorrect: true },
      { text: "Деректер қорымен жұмысты ортақ түрде ұйымдастыруға арналған тілдік жабдықтар кешені", isCorrect: true },
      { text: "Деректер қорымен жұмысты ортақ түрде ұйымдастыруға арналған программалық жабдықтар кешені", isCorrect: true },
      { text: "Деректер қорын құрушы қатынастағы бағандар", isCorrect: false },
      { text: "Атрибут аттарының олар кіретін домендермен бірге көрсетілген тізімі", isCorrect: false },
      { text: "Деректер қорын құрушы қатынасқа кіретін атрибуттар", isCorrect: false },
      { text: "Деректер қорын құрушы қатынастағы жолдар", isCorrect: false }
    ]
  },
  {
    question: "Денормалау",
    answers: [
      { text: "Дерекқордың енгізу, өзгерту қабілетінің жылдамдығын баяулата отырып, дерекқорға артық деректерді енгізу есебінен, деректерді оқу жылдамдығын арттыру", isCorrect: true },
      { text: "нормаланған дерекқордың оқылу жылдамдығын арттыру үшін қолданылатын стратегия (жақын, бірақ негізгі артық дерек қосу әдісі айтылмаған)", isCorrect: false },
      { text: "күрделі деректер құрылымын қарапайым, тұрақты құрылымына өткізу процесі", isCorrect: false },
      { text: "бір кестеден бірнеше кестеге бөліп шығарып, бұл кестелерді тек қана сұраныс арқылы байланыстыру", isCorrect: false },
      { text: "лас деректерді форматтау", isCorrect: false },
      { text: "лас деректерді жою", isCorrect: false },
      { text: "кестелерден артық деректерді жоя отырып, дерекқордың сақтау қабілеттілігін, деректердің тұтастығын және масштабтандыру қабілетін арттыру", isCorrect: false }
    ]
  },
  {
    question: "Қосымшалар сервері бар архитектура",
    answers: [
      { text: "клиент-сервер архитектурасы", isCorrect: true },
      { text: "үш деңгейлі клиент-сервер архитектурасы", isCorrect: true },
      { text: "файл сервер архитектурасы", isCorrect: false },
      { text: "таратылған архитектура", isCorrect: false },
      { text: "гео-таратылған архитектура", isCorrect: false },
      { text: "қашықтағы сервер архитектурасы", isCorrect: false },
      { text: "бір деңгейлі архитектура", isCorrect: false },
      { text: "желілік архитектура", isCorrect: false }
    ]
  },
  {
    question: "Студенттердің аттарын алфавиттік ретпен сұрыптау",
    answers: [
      { text: "ORDER BY Students ASC", isCorrect: true },
      { text: "ORDER BY Students", isCorrect: false },
      { text: "ORDER BY Students Alphabet", isCorrect: false },
      { text: "GROUP BY Students Name ASC", isCorrect: false },
      { text: "SORT BY Students ASC", isCorrect: false },
      { text: "SORT BY Students Alphabetically", isCorrect: false }
    ]
  },
  {
    question: "Иерархиялық модельдің кемшіліктері",
    answers: [
      { text: "құрылымдылық тәуелділік", isCorrect: true },
      { text: "субъектілер арасындағы қатынастарды ұйымдастыру шектеулері", isCorrect: true },
      { text: "әр түйіннің өз атауы (идентификаторы) бар", isCorrect: false },
      { text: "деректердің қауіпсіздігі", isCorrect: false },
      { text: "деректердің тәуелсіздігі", isCorrect: false },
      { text: "деректер құрылымының қарапайым түсінігі", isCorrect: false },
      { text: "деректердің тұтастығы", isCorrect: false }
    ]
  },
  {
    question: "RDBMS – мәліметтер базасын басқарудың реляциялық SQL жүйесі",
    answers: [
      { text: "Microsoft SQL Server", isCorrect: true },
      { text: "MySQL", isCorrect: true },
      { text: "Oracle", isCorrect: true },
      { text: "MongoDB", isCorrect: false },
      { text: "Redis", isCorrect: false },
      { text: "Google Spanner", isCorrect: false },
      { text: "db4o", isCorrect: false },
      { text: "Cassandra", isCorrect: false }
    ]
  },
  {
    question: "Пакеттік орындау режимінде ішкі кестелерді басқару күтулермен бірге жүруі мүмкін",
    answers: [
      { text: "HTREPARTITION", isCorrect: true },
      { text: "HTREINIT", isCorrect: true },
      { text: "BACKUPBUFFER", isCorrect: false },
      { text: "CXCONSUMER", isCorrect: false },
      { text: "WHAITO", isCorrect: false },
      { text: "BACKUPIO", isCorrect: false },
      { text: "ASYNC_NETWORK_IO", isCorrect: false }
    ]
  },
  {
    question: "Тапсырыс сомасы барлық тапсырыстар бойынша орташа сомадан көп және тапсырыс күні 2023-01-01 кейінірек болатын барлық тапсырыстар",
    answers: [
      { text: "SELECT * FROM orders WHERE order_amount > (SELECT AVG(order_amount) FROM orders) AND order_date > '2023-01-01'", isCorrect: true },
      { text: "SELECT * FROM orders WHERE order_amount < ANY (SELECT AVG(orders) FROM orders) AND order_date < '2023-01-01'", isCorrect: false },
      { text: "SELECT * FROM orders WHERE order_amount = ANY (SELECT AVG(orders) FROM orders) AND order_date >= '2023-01-01'", isCorrect: false },
      { text: "SELECT * FROM orders WHERE order_amount > (SELECT AVG(order_amount) FROM orders WHERE order_date < '2023-01-01')", isCorrect: false },
      { text: "SELECT * FROM orders WHERE order_amount > ALL (SELECT SUM(order_amount) FROM orders) AND order_date > '2023-01-01'", isCorrect: false },
      { text: "SELECT * FROM orders WHERE order_amount > (SELECT AVG(order_amount) FROM orders GROUP BY order_date HAVING order_date < '2023-01-01')", isCorrect: false },
      { text: "SELECT * FROM orders WHERE order_amount > ANY (SELECT AVG(orders) FROM orders) AND order_date > '2024-01-01'", isCorrect: false },
      { text: "SELECT * FROM orders WHERE order_amount > (SELECT MIN(order_amount) FROM orders WHERE order_date > '2023-01-01') GROUP BY order_id", isCorrect: false }
    ]
  },
  {
    question: "Ақпараттық есептеу жүйесінің өмірлік циклының кезеңі",
    answers: [
      { text: "жобалау", isCorrect: true },
      { text: "жүйеге қосылатын талаптарды анықтау және талдау", isCorrect: true },
      { text: "жобаның шекараларымен мүмкіндіктерін анықтау", isCorrect: true },
      { text: "ДБ әзірлеуді жобалау", isCorrect: false },
      { text: "ДҚБЖ таңдау", isCorrect: false },
      { text: "бастапқы жобаны әзірлеу", isCorrect: false }
    ]
  },
  {
    question: "Data Manipulation Language SQL:92-ге кірген негізгі операторлар",
    answers: [
      { text: "SELECT", isCorrect: true },
      { text: "INSERT", isCorrect: true },
      { text: "ANY", isCorrect: false },
      { text: "SORT", isCorrect: false },
      { text: "ORDER", isCorrect: false },
      { text: "HAVING", isCorrect: false },
      { text: "SOME", isCorrect: false },
      { text: "GROUP", isCorrect: false }
    ]
  },
  {
    question: "Топтастырылған деректерді сүзу үшін қолданылатын кілт сөз",
    answers: [
      { text: "HAVING", isCorrect: true },
      { text: "DESC", isCorrect: false },
      { text: "WHERE", isCorrect: false },
      { text: "SELECT", isCorrect: false },
      { text: "ORDERBY", isCorrect: false },
      { text: "GROUP", isCorrect: false }
    ]
  },
  {
    question: "Реляциялық алгебрадағы жиындарды біріктіру операциясы",
    answers: [
      { text: "UNION", isCorrect: true },
      { text: "EXTEND", isCorrect: false },
      { text: "WHERE", isCorrect: false },
      { text: "MINUS", isCorrect: false },
      { text: "EXCEPT", isCorrect: false },
      { text: "PROJ", isCorrect: false },
      { text: "INTERSECT", isCorrect: false }
    ]
  },
  {
    question: "SQL тіліндегі іріктеу шарты сөйлеммен беріледі",
    answers: [
      { text: "WHERE", isCorrect: true },
      { text: "SORT", isCorrect: false },
      { text: "JOIN", isCorrect: false },
      { text: "FILTER", isCorrect: false },
      { text: "ORDERBY", isCorrect: false },
      { text: "GROUP BY", isCorrect: false }
    ]
  },
  {
    question: "Жинақтаушы (агрегация) операцияларына жатпайды",
    answers: [
      { text: "ASC", isCorrect: true },
      { text: "GROUP", isCorrect: true },
      { text: "HAVING", isCorrect: true },
      { text: "COUNT", isCorrect: false },
      { text: "AVG", isCorrect: false },
      { text: "MIN", isCorrect: false },
      { text: "SUM", isCorrect: false },
      { text: "MAX", isCorrect: false }
    ]
  },
  {
    question: "Біріктіру",
    answers: [
      { text: "Егер A →→ B және A →→ C, онда A →→ BC", isCorrect: true },
      { text: "Егер B, A-ның ішкі жиыны болса, онда A →→ B", isCorrect: false },
      { text: "Егер A →→ B және B →→ C, онда A →→ C-B", isCorrect: false },
      { text: "Егер A →→ B және B C →→ D, онда AC →→ D-BC", isCorrect: false },
      { text: "Егер A →→ B, онда A →→ B", isCorrect: false },
      { text: "Егер A →→ BC, онда A →→ B∩C, A →→ B-C және A →→ C-B", isCorrect: false },
      { text: "Егер A →→ B, C→D, D B-ның ішкі жиыны, ал B∩C қиылысы БОС болса, онда A→D", isCorrect: false }
    ]
  },
  {
    question: "Кестелер арасындағы байланыстардың дұрыстығын тексеретін деректер тұтастығының типі",
    answers: [
      { text: "сілтемелік", isCorrect: true },
      { text: "сыртқы", isCorrect: false },
      { text: "жалпы", isCorrect: false },
      { text: "төменгі", isCorrect: false },
      { text: "семантикалық", isCorrect: false },
      { text: "жоғарғы", isCorrect: false },
      { text: "домендік", isCorrect: false },
      { text: "ішкі", isCorrect: false }
    ]
  },
  {
    question: "Транзакция қасиеті",
    answers: [
      { text: "атомарлық", isCorrect: true },
      { text: "бағыттық", isCorrect: true },
      { text: "серия бойынша (оқшаулау)", isCorrect: true },
      { text: "бөліну (келісімділік)", isCorrect: true },
      { text: "төзімділік", isCorrect: false },
      { text: "икемділік", isCorrect: false },
      { text: "қауіпсіздік", isCorrect: false },
      { text: "ашықтық", isCorrect: false }
    ]
  },
  {
    question: "Басқа қатынас үшін бастапқы кілттерінде қызмет ете алатын бір қатынастың атрибуты",
    answers: [
      { text: "сыртқы кілт", isCorrect: true },
      { text: "домен", isCorrect: false },
      { text: "кезек", isCorrect: false },
      { text: "бірегей кілт", isCorrect: false },
      { text: "қатынас", isCorrect: false },
      { text: "атрибут", isCorrect: false }
    ]
  },
  {
    question: "Деректерді анықтау тұрғысынан ДҚБЖ бағалаудың ұсынылатын параметрлері",
    answers: [
      { text: "сыртқы кілттерді анықтау", isCorrect: true },
      { text: "берілген деректер түрлері", isCorrect: true },
      { text: "файл құрылымдарын анықтауды қолдау", isCorrect: true },
      { text: "берілген файлдық деректер құрылымдары", isCorrect: false },
      { text: "негізгі кілттерді кеңейтілінген қолдау", isCorrect: false },
      { text: "бақылау нүктелерін қолдау – жүйелік қалпына келтіру функциясы", isCorrect: false },
      { text: "өзгерту қарапайымдылығы", isCorrect: false }
    ]
  },
  {
    question: "InterBase-де ДБ құруға арналған нұсқаулық",
    answers: [
      { text: "CREATE DATABASE ‘d:\\data\\warehouse.ib’ USER ‘SYSDBA’ PASSWORD ‘masterkey’", isCorrect: true },
      { text: "CREATE DOMAIN DOMAIN_SMALLRANGE AS INTEGER DEFAULT 1 CHECK (VALUE BETWEEN 1 AND 100)", isCorrect: false },
      { text: "CREATE TABLE PEOPLES (IndNum int, Surname char(30), FName char(20), LName char(20), BDay date)", isCorrect: false },
      { text: "CREATE DOMAIN D_DATE AS DATE DEFAULT current_date", isCorrect: false },
      { text: "CREATE DATABASE ‘WAREHOUSE’", isCorrect: false },
      { text: "ALTER SCHEMA ‘warehouse’ DEFAULT CHARACTER SET cp1251", isCorrect: false }
    ]
  },
  {
    question: "A элементтерінің жиынтығына уақыттың әр сәтінде 1 B элементі сәйкес келетінін көрсететін",
    answers: [
      { text: "көпке бір", isCorrect: true },
      { text: "бірге бір", isCorrect: false },
      { text: "екіге көп", isCorrect: false },
      { text: "екіге екі", isCorrect: false },
      { text: "көпке көп", isCorrect: false },
      { text: "бірге көп", isCorrect: false },
      { text: "көпке екі", isCorrect: false }
    ]
  },
  {
    question: "Біріктіру (union) амалының нәтижесі",
    answers: [
      { text: "кемінде бір қатынастағы барлық кортеждер жиыны", isCorrect: true },
      { text: "бірінші және екінші қатынасқа кіретін барлық кортеждер жиыны", isCorrect: true },
      { text: "екі қатынасқа да кіретін кортеждер жиыны (INTERSECT)", isCorrect: false },
      { text: "бірінші қатынасқа кіретін, бірақ екіншісіне кірмейтін кортеждер жиыны (DIFFERENCE EXCEPT)", isCorrect: false },
      { text: "берілген шартты қанағаттандыратын кортеждер жиыны (SELECT WHERE)", isCorrect: false },
      { text: "берілген шартты қанағаттандырмайтын кортеждер жиыны (SELECT WHERE)", isCorrect: false }
    ]
  },
  {
    question: "Деректер қорының атрибутын көшіруге арналған реляционды алгебраның амалы",
    answers: [
      { text: "проекция", isCorrect: true },
      { text: "Декарт көбейтіндісі", isCorrect: false },
      { text: "айырмашылық", isCorrect: false },
      { text: "таңдау", isCorrect: false },
      { text: "INSERSECT", isCorrect: false },
      { text: "бөлу", isCorrect: false },
      { text: "қарым қатынасты біріктіру", isCorrect: false },
      { text: "біріктіру", isCorrect: false }
    ]
  },
  {
    question: "Деректер модельдерінің түрлері",
    answers: [
      { text: "реляциондық", isCorrect: true },
      { text: "желілік", isCorrect: true },
      { text: "иерархиялық", isCorrect: true },
      { text: "функционалдық", isCorrect: false },
      { text: "кестелік", isCorrect: false }
    ]
  },
  {
    question: "Таңдау амалының нәтижесі",
    answers: [
      { text: "Берілген шартты қанағаттандыратын кортеждер жиыны", isCorrect: true },
      { text: "берілген шартты қанағаттандырмайтын кортеждер жиыны (таңдау амалына қайшы)", isCorrect: false },
      { text: "кемінде бір қатынастағы барлық кортеждер жиыны (біріктіру UNION амалы)", isCorrect: false },
      { text: "бірінші қатынасқа кіретін, бірақ екіншісіне кірмейтін кортеждер жиыны (айырма DIFFERENCE амалы)", isCorrect: false },
      { text: "екінші қатынасқа кіретін кортеждер жиыны (таңдауға қатысы жоқ)", isCorrect: false },
      { text: "екі қатынаста да бар кортеждер жиыны (қиылысу INTERSECT)", isCorrect: false }
    ]
  },
  {
    question: "Кестедегі элементтерді жаңарту үшін қолданылатын команда",
    answers: [
      { text: "UPDATE", isCorrect: true },
      { text: "DROP (кесте н/е объектіні толығымен өшіреді)", isCorrect: false },
      { text: "INSERT (кестеге жаңа жол қосады)", isCorrect: false },
      { text: "SELECT (кестеден деректерді іріктеп оқиды)", isCorrect: false },
      { text: "ALTER (кестенің құрылымын өзгерту)", isCorrect: false },
      { text: "WHERE (UPDATE, DELETE, SELECT шарт анықтайды)", isCorrect: false },
      { text: "DELEТЕ (кестеден жолдарды өшіреді)", isCorrect: false }
    ]
  },
  {
    question: "Біріктіру операциясы үшін қолданылатын команда",
    answers: [
      { text: "union", isCorrect: true },
      { text: "intersect", isCorrect: false },
      { text: "times", isCorrect: false },
      { text: "project", isCorrect: false },
      { text: "select", isCorrect: false }
    ]
  },
  {
    question: "Кесте құру барысында осы кілттік сөз арқылы негізгі кестедегі жол өзгерсе, онда қате туралы ақпарат шығады",
    answers: [
      { text: "ON UPDATE NO ACTION", isCorrect: true },
      { text: "CONSTRAINT", isCorrect: false },
      { text: "ON DELETE CASCADE", isCorrect: false },
      { text: "PRIVATE KEY", isCorrect: false },
      { text: "ON DELETE NO ACTION", isCorrect: false },
      { text: "FOREIGN KEY", isCorrect: false }
    ]
  },
  {
    question: "Нысан қасиетінің күрделілігі",
    answers: [
      { text: "қарапайым қасиеттердің жиынтығы", isCorrect: true },
      { text: "егер қасиет көп өзгеретін болса (динамикаға қатысты)", isCorrect: false },
      { text: "пәндік облысты толық сипаттайды (мәнділікке, толықтыққа қатысты)", isCorrect: false },
      { text: "көп мәнге ие бола алатын баған (көп мәнді атрибут)", isCorrect: false },
      { text: "қасиеті бинарлы мәнге ие (логикалық/бинарлы атрибут)", isCorrect: false },
      { text: "қасиеті уникалды мәнге ие (кілттік н/е бірегейлікке қатысты)", isCorrect: false }
    ]
  },
  {
    question: "Әлеуеттік кілттің сипаты",
    answers: [
      { text: "жазбаны бірегей анықтайтын деректер қорының кілт", isCorrect: true },
      { text: "керекті кортежді табуға көмектесетін минималды атрибуттар жиынтығы", isCorrect: true },
      { text: "күрделі емес кілт болу керек", isCorrect: false },
      { text: "басқа қатынастарда байланысқан ақпараты жоқ кортеждер жойылады", isCorrect: false },
      { text: "сыртқы кілт", isCorrect: false },
      { text: "минималды атрибуттан тұру керек", isCorrect: false }
    ]
  },
  {
    question: "Қатынас 4 НФ да болады егер",
    answers: [
      { text: "көп мәнді қатынас болса және қатынастағы қалған атрибуттар А-ға функционалды тәуелді болса", isCorrect: true },
      { text: "ЗНФ-те болатын және кілттік емес атрибуттар өзара тәуелді", isCorrect: false },
      { text: "3НФ-те болатын және логикалық бөлінбейтін мәндерге ие қатынас", isCorrect: false },
      { text: "3НФ-те болса және кілттік емес атрибуттары бастапқы кілтке тәуелді болса", isCorrect: false },
      { text: "2НФ да болса және функционалдық тәуелділіктер болмаса", isCorrect: false },
      { text: "3НФ-те болатын және логикалық бөлінетін мәндерге ие қатынас", isCorrect: false }
    ]
  },
  {
    question: "агрегаттық функциялар емес",
    answers: [
      { text: "ALL", isCorrect: true },
      { text: "ANY", isCorrect: true },
      { text: "ASC", isCorrect: true },
      { text: "SUM", isCorrect: false },
      { text: "MAX", isCorrect: false },
      { text: "COUNT", isCorrect: false },
      { text: "MIN", isCorrect: false },
      { text: "AVG", isCorrect: false }
    ]
  },
  {
    question: "Жинақтаушы (агрегация) операцияларына жатпайды",
    answers: [
      { text: "ASC", isCorrect: true },
      { text: "GROUP", isCorrect: true },
      { text: "HAVING", isCorrect: true },
      { text: "COUNT", isCorrect: false },
      { text: "AVG", isCorrect: false },
      { text: "MIN", isCorrect: false },
      { text: "SUM", isCorrect: false },
      { text: "MAX", isCorrect: false }
    ]
  },
  {
    question: "Қала атына кері сұрыптауды қолданып, Парижден басқа және өлшемі 10 кг-нан көп болатын бөлшектердің түсі мен қай қалада шығарылатынын көрсету",
    answers: [
      { text: "SELECT P.Color, P.City FROM P WHERE P.City <> 'Paris' AND P.Weight > 10 ORDER BY City DESC;", isCorrect: true },
      { text: "SELECT P.Color, P.City FROM P WHERE P.City <> 'Paris' OR P.Weight > 10 GROUP BY City DESC;", isCorrect: false },
      { text: "SELECT P.Color, P.City FROM P WHERE P.City <> 'Paris' OR P.Weight > 10 ORDER BY City DESC;", isCorrect: false },
      { text: "SELECT P.Color, P.City FROM P WHERE P.City <> 'Paris' AND P.Weight > 10 ORDER BY City;", isCorrect: false },
      { text: "SELECT P.Color, P.City FROM P WHERE P.City <> 'Paris' AND P.Weight > 10;", isCorrect: false },
      { text: "SELECT P.Color, P.City FROM P;", isCorrect: false }
    ]
  },
  {
    question: "Қиылысу операциясы үшін қолданылатын команда",
    answers: [
      { text: "intersect", isCorrect: true },
      { text: "divide by", isCorrect: false },
      { text: "project", isCorrect: false },
      { text: "union", isCorrect: false },
      { text: "minus", isCorrect: false },
      { text: "join", isCorrect: false },
      { text: "times", isCorrect: false },
      { text: "select", isCorrect: false }
    ]
  },
  {
    question: "Иерархиялық деректер қорында ағашты толық қарап өту реті",
    answers: [
      { text: "жоғарыдан төмен, солдан оңға қарай", isCorrect: true },
      { text: "жоғарыдан төмен, оңнан солға қарай", isCorrect: false },
      { text: "төменнен жоғары, солдан оңға қарай", isCorrect: false },
      { text: "тек солдан оңға қарай", isCorrect: false },
      { text: "төменнен жоғары, оңнан солға қарай", isCorrect: false },
      { text: "тек оңнан солға қарай", isCorrect: false }
    ]
  },
  {
    question: "Фамилиясы І мен С әріптерінің арасында болатын оқытушылардың сабақ беретін пәндері",
    answers: [
      { text: "SELECT * FROM PREDMET WHERE PREDMET.Tnum IN (SELECT TEACHERS.Tnum FROM TEACHERS WHERE TEACHERS.Tfam BETWEEN 'I' AND 'C');", isCorrect: true },
      { text: "SELECT * FROM PREDMET WHERE PREDMET.Tnum IN (SELECT TEACHERS.Tnum FROM TEACHERS WHERE TEACHERS.Tfam);", isCorrect: false },
      { text: "SELECT * FROM PREDMET WHERE PREDMET.Tnum IN (SELECT TEACHERS.Tnum FROM TEACHERS WHERE TEACHERS.Tfam LIKE 'I%' AND 'C');", isCorrect: false },
      { text: "SELECT * FROM PREDMET WHERE PREDMET.Tnum NOT IN (SELECT TEACHERS.Tnum FROM TEACHERS WHERE TEACHERS.Tfam BETWEEN 'I' AND 'C');", isCorrect: false },
      { text: "SELECT * FROM PREDMET WHERE PREDMET.Tnum IN (SELECT TEACHERS.Tnum FROM TEACHERS WHERE TEACHERS.Tfam BETWEEN 'I' AND 'C');", isCorrect: false },
      { text: "SELECT * FROM PREDMET WHERE PREDMET.Tnum IN (SELECT TEACHERS.Tnum FROM TEACHERS BETWEEN 'I' OR 'C');", isCorrect: false }
    ]
  },
  {
    question: "Реляциялық базада атрибуттың әлеуетті кілт болу қасиеті",
    answers: [
      { text: "уникалдылық", isCorrect: true },
      { text: "агрегаттылық", isCorrect: false },
      { text: "минималдылық", isCorrect: false },
      { text: "ассоциативтік", isCorrect: false },
      { text: "біркелкілік", isCorrect: false },
      { text: "ақпараттық", isCorrect: false }
    ]
  },
  {
    question: "Нормалдық формалар",
    answers: [
      { text: "0НФ", isCorrect: true },
      { text: "3НФ", isCorrect: true },
      { text: "Біріктіру НФ", isCorrect: false },
      { text: "БНФ", isCorrect: true },
      { text: "4НФ", isCorrect: true },
      { text: "Бойс-Коддтың НФ", isCorrect: true },
      { text: "Ажырату НФ", isCorrect: false },
      { text: "Код НФ", isCorrect: false }
    ]
  },
  {
    question: "Пән нөмірі мен сол пәннен сабақ беретін оқытушылардың тізімі",
    answers: [
      { text: "SELECT Name, CourseId FROM INSTRUCTOR, TEACHES;", isCorrect: true },
      { text: "SELECT Name, CourseId FROM INSTRUCTOR, TEACHES WHERE INSTRUCTOR.Id = TEACHES.Id;", isCorrect: false },
      { text: "SELECT Name, CourseId FROM INSTRUCTOR WHERE INSTRUCTOR.Id = Id;", isCorrect: false },
      { text: "SELECT Name, CourseId FROM INSTRUCTOR, TEACHES WHERE INSTRUCTOR.Id == TEACHES;", isCorrect: false },
      { text: "SELECT Name, CourseId FROM INSTRUCTOR NATURAL JOIN TEACHES", isCorrect: false },
      { text: "SELECT Name, CourseId FROM INSTRUCTOR WHERE INSTRUCTOR.Id == Id;", isCorrect: false }
    ]
  },
  {
    question: "Орташа жалақысы ең үлкен болатын бөлімдерді табу",
    answers: [
      { text: "SELECT DepName FROM INSTRUCTOR HAVING AVG(Salary) >= ANY ( SELECT AVG(Salary) FROM INSTRUCTOR);", isCorrect: true },
      { text: "SELECT DepName FROM INSTRUCTOR HAVING AVG(Salary) >= ALL ( SELECT AVG(Salary) FROM INSTRUCTOR);", isCorrect: false },
      { text: "SELECT DepName FROM INSTRUCTOR HAVING AVG(Salary) <= ALL ( SELECT AVG(Salary) FROM INSTRUCTOR);", isCorrect: false },
      { text: "SELECT DepName FROM INSTRUCTOR HAVING AVG(Salary) <= ( SELECT MIN(Salary) FROM INSTRUCTOR);", isCorrect: false },
      { text: "SELECT DepName FROM INSTRUCTOR HAVING (Salary) >= ALL ( SELECT AVG(Salary) FROM INSTRUCTOR);", isCorrect: false },
      { text: "SELECT DepName FROM INSTRUCTOR HAVING (Salary) >= ( SELECT AVG(Salary) FROM INSTRUCTOR);", isCorrect: false }
    ]
  },
  {
    question: "DELETE операторы",
    answers: [
      { text: "кестеден жолдарды жою", isCorrect: true },
      { text: "кестені құру", isCorrect: false },
      { text: "кестедегі жолдарды жаңарту", isCorrect: false },
      { text: "кестені жою", isCorrect: false },
      { text: "мәліметтерді таңдау", isCorrect: false },
      { text: "жолдар енгізу", isCorrect: false }
    ]
  },
  {
    question: "Студенттердің 10/09/2021 күні алынған баллынан жоғары балдар",
    answers: [
      { text: "SELECT * FROM USP WHERE Ocenka >= ALL (SELECT Ocenka FROM USP WHERE Udate = 10/09/2021);", isCorrect: true },
      { text: "SELECT * FROM USP WHERE Ocenka >= ALL (SELECT Ocenka FROM USP)", isCorrect: false },
      { text: "SELECT * FROM USP WHERE Ocenka >= SOME (SELECT Ocenka FROM USP WHERE Udate = 10/09/2021);", isCorrect: false },
      { text: "SELECT * FROM USP WHERE Ocenka >= NOT ALL (SELECT Ocenka FROM USP WHERE Udate = 10/09/2021);", isCorrect: false },
      { text: "SELECT * FROM USP WHERE Ocenka <= (SELECT Ocenka FROM USP WHERE Udate = 10/09/2021);", isCorrect: false },
      { text: "SELECT * FROM USP WHERE Ocenka >= ANY (SELECT Ocenka FROM USP WHERE Udate = 10/09/2021);", isCorrect: false }
    ]
  },
  {
    question: "Деректер қорының бүтіндігі түсінігі",
    answers: [
      { text: "ақпараттық қорғаландығы", isCorrect: true },
      { text: "ақпараттың топталғандығы", isCorrect: true },
      { text: "ақпараттың қарама-қайшы еместігі", isCorrect: true },
      { text: "ақпараттың қарама-қайшылығы", isCorrect: false },
      { text: "атрибуттарды жіктеу мүмкіндігі", isCorrect: false },
      { text: "ақпараттың тәуелділігі", isCorrect: false },
      { text: "ақпараттық өзектілігі", isCorrect: false },
      { text: "атрибуттарды топтау мүмкіндігі", isCorrect: false }
    ]
  },
  {
    question: "Қатынас 5НФ да болады, егер",
    answers: [
      { text: "3НФ-те болса және кілттік емес атрибуттары бастапқы кілтке тәуелді болса", isCorrect: true },
      { text: "3НФ-те болатын және кілттік емес атрибуттар өзара тәуелді", isCorrect: false },
      { text: "қатынастағы кез-келген байланысу тәуелділігі осы қатынаста мүмкін болатын кілттің бар болуынан шығады", isCorrect: false },
      { text: "көп мәнді қатынас болса және қатынастағы қалған атрибуттар A-ға функционалды тәуелді болса", isCorrect: false },
      { text: "3НФ-те болатын және логикалық бөлінібейтін мәндерге ие қатынас", isCorrect: false },
      { text: "2НФ да болса және функционалдық тәуелділіктер болмаса", isCorrect: false }
    ]
  },
  {
    question: "Адресі Алматыдан болатын жұмысшылардың аты-жөні",
    answers: [
      { text: "SELECT Fname, Lname FROM EMPLOYEE WHERE Address LIKE 'Алматы%';", isCorrect: true },
      { text: "SELECT Fname, Lname FROM EMPLOYEE WHERE Address NOT LIKE 'Алматы%';", isCorrect: false },
      { text: "SELECT Fname, Lname FROM EMPLOYEE;", isCorrect: false },
      { text: "SELECT Fname, Lname FROM EMPLOYEE WHERE Address NOT IN ('%Алматы%');", isCorrect: false },
      { text: "SELECT Fname, Lname FROM EMPLOYEE WHERE Address == Алматы", isCorrect: false },
      { text: "SELECT Fname, Lname FROM EMPLOYEE WHERE Address LIKE '%Алматы%';", isCorrect: false }
    ]
  },
  {
    question: "Индексте мәліметтерді реттеу әдісі",
    answers: [
      { text: "SORT", isCorrect: true },
      { text: "ASC|DESC", isCorrect: true },
      { text: "ORDER BY", isCorrect: true },
      { text: "CASCADE", isCorrect: false },
      { text: "ON UPDATE CASCADE", isCorrect: false },
      { text: "REFERENCES", isCorrect: false },
      { text: "ON UPDATE NO ACTION", isCorrect: false },
      { text: "CHECK", isCorrect: false }
    ]
  },
  {
    question: "Әр Должность бағанында жұмысшы санын анықтайтын сұраныс",
    answers: [
      { text: "SELECT Должность, COUNT(*) FROM Кадровый_состав", isCorrect: true },
      { text: "SELECT COUNT(*) FROM Кадровый_состав", isCorrect: false },
      { text: "SELECT COUNT(*) FROM Должность", isCorrect: false },
      { text: "SELECT COUNT(*) FROM Кадровый_состав GROUP BY Должность WHERE Должность NOT NULL", isCorrect: false },
      { text: "SELECT Должность, SUM(*) FROM Кадровый_состав", isCorrect: false },
      { text: "SELECT Должность, MAX(*) FROM Кадровый_состав", isCorrect: false }
    ]
  },
  {
    question: "Выберите все результаты следующего SQL запроса: SELECT Name FROM Students WHERE ID=1 OR ID=2; \n1. Yerbol, Kazhigereyev, 2.5, 3  \n2. Aidana, Khassenova, 3.0, 2  \n3. Marat, Aidosov, 4.0, 1  \n4. Aidos, Kurmanov, 1.4, 4  \n5. Elena, Fedorova, 2.0, 1  \n6. Aidar, Elmanov, 3.1, 3  \n7. Anna, Karenina, 2.1, 2 ",
    answers: [
      { text: "Yerbol", isCorrect: true },
      { text: "Aidana", isCorrect: true },
      { text: "Marat", isCorrect: false },
      { text: "3", isCorrect: false },
      { text: "4", isCorrect: false },
      { text: "Khassenova", isCorrect: false }
    ]
  },
  {
    question: "Деректерді көрсету модельдері",
    answers: [
      { text: "Деректер қорында сақталған деректердің логикалық құрылымы", isCorrect: true },
      { text: "Деректер қорында сақталған деректердің физикалық құрылымы", isCorrect: false },
      { text: "Деректер қорын құраушы қатынастағы жолдар", isCorrect: false },
      { text: "Деректер қорымен жұмысты ортақ түрде ұйымдастыруға арналған тілдік жабдықтар", isCorrect: false },
      { text: "Деректер қорымен жұмысты ортақ түрде ұйымдастыруға арналған программалық жабдықтар", isCorrect: false },
      { text: "Деректер қорымен жұмысты ортақ түрде ұйымдастыруға арналған аппараттық жабдықтар", isCorrect: false },
      { text: "Деректер қорын құруға, қолдауға және ортақ жұмыс істеуге арналған жабдықтар", isCorrect: false },
      { text: "Атрибут аттарының олар кіретін домендермен бірге көрсетілген тізімі", isCorrect: false }
    ]
  },
  {
    question: "Aта-аналары мен балалары туралы деректерді сақтайтын деректер қорынан олардың арасындағы қатынас түрі",
    answers: [
      { text: "1:M", isCorrect: true },
      { text: "1:1", isCorrect: false },
      { text: "2:1", isCorrect: false },
      { text: "1:3", isCorrect: false },
      { text: "3:1", isCorrect: false },
      { text: "0:1", isCorrect: false },
      { text: "1:0", isCorrect: false },
      { text: "2:M", isCorrect: false }
    ]
  },
  {
    question: "Желілік модельді анықтайтын негізгі түсініктер",
    answers: [
      { text: "сегмент", isCorrect: true },
      { text: "түйін", isCorrect: true },
      { text: "деректер", isCorrect: false },
      { text: "кесте", isCorrect: false },
      { text: "программа", isCorrect: false },
      { text: "команда", isCorrect: false },
      { text: "оператор", isCorrect: false },
      { text: "деңгей", isCorrect: false }
    ]
  },
  {
    question: "Студенттер туралы деректерді сақтайтын кестеге нөмірі 5 ұяшыққа 25 балл қосатын SQL сұраныс құрыңыз",
    answers: [
      { text: "UPDATE STUDENT SET GRADE= GRADE + 25 WHERE NUMBER = 5;", isCorrect: true },
      { text: "INSERT STUDENT SET GRADE= GRADE + 25 WHERE NUMBER = 5;", isCorrect: false },
      { text: "CREATE STUDENT INSERT 25 WHERE NUMBER = 5;", isCorrect: false },
      { text: "INSERT 25 TO NUMBER=25;", isCorrect: false },
      { text: "ENTER 25 TO GRADE WHERE NUMBER = 5;", isCorrect: false },
      { text: "INSERT STUDENT SET GRADE= 25 WHERE NUMBER = 5;", isCorrect: false }
    ]
  },
  {
    question: "Пән саласының моделі",
    answers: [
      { text: "Деректер қорында сақталуға тиіс және сақталуы міндетті емес объектілерді көрсетеді", isCorrect: true },
      { text: "Деректер қорындағы көптік байланыстың кескіндерін пайдаланатын объектілерді көрсетеді", isCorrect: false },
      { text: "Деректер қоры клиент бөлімінде сақталатын объектілерді көрсетеді", isCorrect: false },
      { text: "Деректер қоры сервер бөлімінде сақталатын объектілерді өңдейді", isCorrect: false },
      { text: "Файл- сервердегідей іс-әрекет орындалады", isCorrect: false },
      { text: "Атрибуттарды топтау әдісі арқылы клиент бөлімінде сақталады", isCorrect: false },
      { text: "Атрибуттарды жіктеу әдісі арқылы клиент бөлімінде сақталады", isCorrect: false },
      { text: "Атрибут бойынша деректер тәуелді болады", isCorrect: false }
    ]
  },
  {
    question: "Kелесі SQL сұраныстың орындалу нәтижесіне ORDER BY предикатының әсерін көрсетіңіз SELECT ename,job,sal FROM emp WHERE deptno = 10 ORDER BY sal DESC",
    answers: [
      { text: "Нәтижелік қатынастағы жазбаларды реттейді", isCorrect: true },
      { text: "Нәтижелік қатынастағы жазбаларды ранг бойынша орналастырады", isCorrect: false },
      { text: "Нәтижелік қатынастағы жазбаларды өсу ретімен орналастырады", isCorrect: false },
      { text: "Нәтижелік қатынастағы бағандарды өсу ретімен орналастырады", isCorrect: false },
      { text: "Атрибуттарды реттейді", isCorrect: false },
      { text: "Қатынастық сұлбаны реттейді", isCorrect: false }
    ]
  },
  {
    question: "SQL тілінің деректер қорына енуді қамтамасыз ететін бұйрығы",
    answers: [
      { text: "GRANT", isCorrect: true },
      { text: "DROP TABLE", isCorrect: false },
      { text: "ALTER TABLE", isCorrect: false },
      { text: "CREATE TABLE", isCorrect: false },
      { text: "CREATE VIEW", isCorrect: false },
      { text: "OPEN BD", isCorrect: false },
      { text: "SET BD", isCorrect: false },
      { text: "VIEW BD", isCorrect: false }
    ]
  },
  {
    question: "Реляциялық алгебраның термині бойынша қатынас",
    answers: [
      { text: "Құнды екі бір қасиеттерімен сипатталатын қатынас", isCorrect: true },
      { text: "Деректерді екі бағытымен деңгейлі ортақтасқан түрде көрсетеді", isCorrect: false },
      { text: "Деректерді екі бағытымен деңгейлі анық тарақ тәрізді көрсетеді", isCorrect: false },
      { text: "Көп кестелі кесте", isCorrect: false },
      { text: "Қайталанатын бағандары бар кесте", isCorrect: false },
      { text: "Қайталанатын жолдары бар кесте", isCorrect: false },
      { text: "Екі мәнделген өзара байланысы", isCorrect: false },
      { text: "Деректерді екі бағытымен деңгейлі тізбектелген тарақ түрінде көрсетеді", isCorrect: false }
    ]
  },
  {
    question: "SQL сұранысының орындалуы барысында қордағы өзгеріс",
    answers: [
      { text: "Қорға бір жазба қосылады", isCorrect: true },
      { text: "Қызметкерлердің жұмыс атауы өзгереді", isCorrect: false },
      { text: "Қордағы жазбалар біріктіріледі", isCorrect: false },
      { text: "Қызметкерлердің адресі өзгереді", isCorrect: false },
      { text: "Қызметкерлердің коды шығарылады", isCorrect: false },
      { text: "Балалардың тізімі шығады", isCorrect: false },
      { text: "Қордағы жазбалар өшіріледі", isCorrect: false },
      { text: "Қызметкерлердің тізімі шығады", isCorrect: false }
    ]
  },
  {
    question: "Бірнеше нысанды біріктіретін қауымдастық",
    answers: [
      { text: "жиын", isCorrect: true },
      { text: "байланыс", isCorrect: false },
      { text: "қасиет", isCorrect: false },
      { text: "қатынас", isCorrect: false },
      { text: "агрегация", isCorrect: false },
      { text: "кілт", isCorrect: false }
    ]
  },
  {
    question: "Транзакция механизмі қолданылады",
    answers: [
      { text: "Қордағы деректердің бүтіндігін сақтау үшін", isCorrect: true },
      { text: "Қордағы деректерді қорғау үшін", isCorrect: false },
      { text: "Деректерді бір пішімге келтіру үшін", isCorrect: false },
      { text: "Қордан деректерді жою үшін", isCorrect: false },
      { text: "Қордағы деректерді тасымалдау үшін", isCorrect: false },
      { text: "Деректерді бір файлға жазу үшін", isCorrect: false }
    ]
  },
{
    question: "Деректер қорына тікелей қатысты (қолданылатын) программалар атаулары",
    answers: [
      { text: "Python", isCorrect: true },
      { text: "SQL", isCorrect: true },
      { text: "Microsoft Access", isCorrect: true },
      { text: "Java", isCorrect: true },
      { text: "Jango", isCorrect: false },
      { text: "Microsoft Office", isCorrect: false },
      { text: "Microsoft Power Point", isCorrect: false },
      { text: "Microsoft Word", isCorrect: false }
    ]
  },
  {
    question: "DELETE сұранысының орындалу нәтижесінде не болады?",
    answers: [
      { text: "Деректер қорындағы сақталған EMP қатынасындағы барлық жазбалар өшіріледі", isCorrect: true },
      { text: "EMP нәтижелік қатынасындағы жазбаларды кему ретімен орналастырады", isCorrect: false },
      { text: "Деректер қорындағы сақталған жазбалар берілген шарт бойынша өшіріледі", isCorrect: true },
      { text: "Деректер қорындағы сақталған бағаналарды өсу ретімен орналастырады", isCorrect: false },
      { text: "Деректер қорындағы сақталған жазбаларды кему бойынша өзгертеді", isCorrect: false },
      { text: "Қатынастық сұлбаны өшіреді", isCorrect: false },
      { text: "Деректер қорындағы сақталған жазбалар тек ретін өзгертеді", isCorrect: false }
    ]
  },
  {
    question: "Реляциялық деректер моделінде «Студент - топ» байланысының түрі",
    answers: [
      { text: "M:1", isCorrect: true },
      { text: "1:M", isCorrect: false },
      { text: "1:2", isCorrect: false },
      { text: "M:M", isCorrect: false },
      { text: "1:1", isCorrect: false },
      { text: "2:1", isCorrect: false }
    ]
  },
  {
    question: "PRIMARY KEY шектеуі қандай мақсатта қолданылады?",
    answers: [
      { text: "Жазбалардың бірегейлігін қамтамасыз ету үшін", isCorrect: true },
      { text: "Деректерді кему ретімен сұрыптау үшін", isCorrect: false },
      { text: "Қатынастар арасындағы байланысты жою үшін", isCorrect: false },
      { text: "Жазбаларды көшіру үшін", isCorrect: false }
    ]
  },
  {
    question: "SQL-де WHERE бөлімі қандай мақсатта қолданылады?",
    answers: [
      { text: "Деректерді қосу үшін", isCorrect: false },
      { text: "Шарт бойынша деректерді сүзу үшін", isCorrect: true },
      { text: "Кестенің құрылымын өзгерту үшін", isCorrect: false },
      { text: "Барлық жазбаларды өшіру үшін", isCorrect: false }
    ]
  }
];

export default quizDataDataBase;