class Email {
  private _from: string;
  private _to: string;
  private _subject: string;
  private _body: string;

  constructor(from: string, to: string, subject: string, body: string) {
    this._from = from;
    this._to = to;
    this._subject = "";
    this._subject = subject;
    this._body = body;
  }
  set subject(newSubject: string) {
    if (newSubject.length <= 40) {
      this._subject = newSubject;
    }
  }
  get subject(): string {
    return this._subject;
  }
  get from(): string {
    return this._from;
  }
  get to(): string {
    return this._to;
  }
  get content(): string {
    return `
    From ${this._from} to ${this._to}
    ${this._subject}
    ${this._body}`;
  }
}

class MailList {
  constructor(private mailList: Email[]) {}
  get all(): Email[] {
    return this.mailList;
  }
  getByEmailFrom(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.from === mailAddress);
  }
  getByEmailTo(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.to === mailAddress);
  }
  getBySubject(searchString: string): Email[] {
    return this.mailList.filter(
      (mail) => mail.subject.indexOf(searchString) !== -1
    );
  }
  addEmail(newMail: Email): void {
    this.mailList.push(newMail);
  }
  removeEmail(mailToRemove: Email): void {
    this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
  }
}

const email1 = new Email(
  "me@personalmail.com",
  "friend@personalmail.com",
  "Hello",
  "How are you?"
);
const email2 = new Email(
  "friend@personalmail.com",
  "me@personalmail.com",
  "Reply - Hello",
  "I'm fine, thank you!"
);
const email3 = new Email(
  "me@personalmail.com",
  "friend@personalmail.com",
  "Reply - Reply - Hello",
  "Great! I miss you, where have you been?"
);
const email4 = new Email(
  "ceo@companymail.com",
  "me@companymail.com",
  "Job offer",
  "We are looking for a developer to join our team."
);
const email5 = new Email(
  "me@companymail.com",
  "ceo@companymail.com",
  "Reply - Job offer",
  "I'm interested. Can we do an interview at tomorrow morning?"
);

const personalMailList = new MailList([email1, email2, email3]);
const companyMailList = new MailList([email4, email5]);

console.log(
  '--------- personalMailList.getByEmailFrom("me@personalmail.com"):'
);
personalMailList
  .getByEmailFrom("me@personalmail.com")
  .forEach((mail) => console.log(mail.content));

const email6 = new Email(
  "me@personalmail.com",
  "friend2@personalmail.com",
  "Day off monday",
  `Oh yes!
  My boss says we\'ll have a day off monday.
  Want to go to the movies?`
);

personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente

console.log('--------- personalMailList.getBySubject("day"):');
personalMailList
  .getBySubject("Day off")
  .forEach((mail) => console.log(mail.content));

personalMailList.removeEmail(email5);

console.log("--------- professionalMailList.all:");
companyMailList.all.forEach((mail) => console.log(mail.content));

console.log("--------- personalMailList.all:");
personalMailList.all.forEach((mail) => console.log(mail.content));
