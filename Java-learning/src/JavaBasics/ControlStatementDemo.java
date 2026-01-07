package JavaBasics;

/**
 * Write a Java program that:
 * Takes a student's marks (0–100) as input.
 * Uses if-else to determine the grade:
 * 90–100 → A
 * 75–89 → B
 * 60–74 → C
 * 40–59 → D
 * Below 40 → F
 * Uses a switch statement to print a message:
 * A → “Excellent”
 * B → “Very Good”
 * C → “Good”
 * D → “Needs Improvement”
 * F → “Fail”
 * Uses a ternary operator to check pass/fail:
 * Marks >= 40 → “Pass”
 * Else → “Fail”
 * Uses a loop to re-run the program until the user enters -1.
 */

public class ControlStatementDemo {
    public static void studentGrade(int marks) {
        String Grade;
        if (marks >= 90) {
            Grade = "A";
        } else if (marks >= 75) {
            Grade = "B";
        } else if (marks >= 60) {
            Grade = "C";
        } else if (marks >= 40) {
            Grade = "D";
        } else {
            Grade = "E";
        }

        System.out.println("Grade is " + Grade);
        System.out.println(marks > 40 ? "Student is Passed" : "Student is Failed");
        ControlStatementDemo.studentRemark(Grade);
    }

    public static void studentRemark(String grade) {
        String Remark;
        switch (grade) {
            case "A":
                Remark = "Excellent";
                break;
            case "B":
                Remark = "Very Good";
                break;
            case "C":
                Remark = "Good";
                break;
            case "D":
                Remark = "Needs Improvement";
                break;
            case "E":
                Remark = "FAIL";
                break;
            default:
                Remark = "Unknown";
        }
        System.out.println("Remark is " + Remark);
    }

    public static void main(String[] args) {
        ControlStatementDemo.studentGrade(68);
    }
}
