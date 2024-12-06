using captest as my from '../db/schema';


service BusinessProcess {

entity Student as projection on my.Student;



entity Teacher as projection on my.Teacher;

action FetchDatafromVisionAI(Prompt : String, dfdf : Integer) returns String;

}