class Person {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

let WorkingGroup = {
  ua: {
    udovyk: new Person(
      "Удовик Ірина Михайлівна",
      "Кандидат технічних наук, доцент, завідувач кафедри програмного забезпечення комп’ютерних систем " +
      "у ДВНЗ \"Національний Гірничий Університет\""),
    us: new Person(
      "Уc Світлана Альбертівна",
      "Кандидат фізико-математичних наук, доцент, професор кафедри системного аналізу і управління " +
      "у ДВНЗ \"Національний Гірничий Університет\""),
    churikanova: new Person(
      "Чуріканова Олена Юріївна",
      "Кандидат економічних наук, доцент кафедри економічної кібернетики та інформаційних технологій " +
      "у ДВНЗ \"Національний Гірничий Університет\""),
    koryashkina: new Person(
      "Коряшкіна Лариса Сергіївна",
      "Кандидат физико-математичних наук, доцент кафедри системного аналізу і управління " +
      "у ДВНЗ \"Національний Гірничий Університет\""),
    alekseev_m: new Person(
      "Алексєєв Михайло Олександрович",
      "Доктор технічних наук, професор, декан факультету інформаційних технологій " +
      "у ДВНЗ \"Національний Гірничий Університет\""),
    alekseev_a: new Person(
      "Алексєєв Олексій Михайлович",
      "Кандидат технічних наук, доцент кафедри системного аналізу і управління " +
      "у ДВНЗ \"Національний Гірничий Університет\"")
  },
  en: {
    udovyk: new Person(
      "Udovyk Iryna",
      "Head of Department of Software Engineering, Candidate of Technical Sciences, Associate Professor " +
      "in State Higher Educational Institution \"National Mining University\""),
    us: new Person(
      "Us Svitlana",
      "Candidate of Physics and Mathematics, Associate Professor, Professor of Department of System Analysis and Control " +
      "in State Higher Educational Institution \"National Mining University\""),
    churikanova: new Person(
      "Churikanova Elena",
      "Candidate of Economic science, Associate Professor of the Department of E-Economy & Economic Cybernetics " +
      "in State Higher Educational Institution \"National Mining University\""),
    koryashkina: new Person(
      "Koryashkina Larissa",
      "Candidate of Physics and Mathematics, Associate Professor of Department of System Analysis and Control " +
      "in State Higher Educational Institution \"National Mining University\""),
    alekseev_m: new Person(
      "Alekseev Mikhail",
      "Doctor of technical sciences, Professor, Dean of the Faculty of information technology " +
      "in State Higher Educational Institution \"National Mining University\""),
    alekseev_a: new Person(
      "Alekseev Alexey",
      "Candidate of Technical Sciences, Associate Professor of Department of System Analysis and Control " +
      "in State Higher Educational Institution \"National Mining University\"")
  }
};

export default WorkingGroup;
