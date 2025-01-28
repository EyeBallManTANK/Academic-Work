import csv
import tkinter as tk
from datetime import date


class Question:

    #The overseer that keeps tracks of 1 and 2 depending on right and wrong
    answers = []

    def __init__(self, question, opt1,opt2,opt3,opt4, answer, num):
        self.question = question
        self.opt1 = opt1
        self.opt2 = opt2
        self.opt3 = opt3
        self.opt4 = opt4
        self.answer = answer
        self.num = num

    def run(self, question, reset = False):

        #Makes sure list is clear for new object to run correctly
        if reset:
            self.answers.clear()
            reset = False
        
        #Declearing a window and title
        win = tk.Tk()
        win.title(f"Question {self.num}")
        win.geometry("600x700")

        #Nice looking fonts for looks
        fontT = ("Arial", 16, "bold")
        fontL = ("Arial", 14)
        fontB = ("Arial", 12, "bold")
        bC = "#f8f8f8"

        win.configure(bg=bC)

        #Shows question
        #Lots of geeksforgeeks
        tk.Label(win, text=f"Question {self.num}", font=fontT, bg=bC).pack(pady=10)
        tk.Label(win, text = self.question,font = fontT, bg= bC, wraplength = 250, justify = "center").pack(pady=10)

        #Keeps track of which answer the person has selected
        #After to much time spent on geeksforgeeks we get *fancy* looking buttons very tired sounding "woot"
        v = tk.IntVar()

        tk.Radiobutton(win, text = self.opt1, variable = v, value = 1, font = fontL, bg = bC, activebackground = "#d9d9d9", anchor = "w", padx =20).pack(anchor = "w", pady = 5, padx = 30)
        tk.Radiobutton(win, text = self.opt2, variable = v, value = 2, font = fontL, bg = bC, activebackground = "#d9d9d9", anchor = "w", padx =20).pack(anchor = "w", pady = 5, padx = 30)
        tk.Radiobutton(win, text = self.opt3, variable = v, value = 3, font = fontL, bg = bC, activebackground = "#d9d9d9", anchor = "w", padx =20).pack(anchor = "w", pady = 5, padx = 30)
        tk.Radiobutton(win, text = self.opt4, variable = v, value = 4, font = fontL, bg = bC, activebackground = "#d9d9d9", anchor = "w", padx =20).pack(anchor = "w", pady = 5, padx = 30)

        #Fancy submit button
        tk.Button(win, text="Submit", command=lambda: question.AnswerTracker(v.get(), win), font=fontB, bg="#28a745", fg="white", activebackground="#218838", activeforeground="white", relief="raised", bd=3).pack(pady=20)


        tk.mainloop()




    #Keeps track of right and wrong answers in answers list
    def AnswerTracker(self, ans, win):

        #Checks to see if they put the correct answer if not it is counted as wrong
        if 1 == ans and self.answer == self.opt1:
            self.answers.append(1)
        elif 2 == ans and self.answer == self.opt2:
            self.answers.append(1)
        elif 3 == ans and self.answer == self.opt3:
            self.answers.append(1)
        elif 4 == ans and self.answer == self.opt4:
            self.answers.append(1)
        else:
            self.answers.append(2)
        win.destroy()

        print(self.answers)



    #Gets scores from the quiz
    def Scores(self):

        #Makes sure they answered every question
        try:
            #Keeps the correct answers
            correct = 0
            #Searches through answers to determine which ones were correct
            for i in self.answers:

                if i == 1:
                    correct = correct +1

            #Creates percentage
            answer = f"{correct}/{len(self.answers)}"
            
            #Creates window and size
            com = tk.Tk()
            com.title("Score")
            com.geometry("300x250")

            #Style points
            fontL = ("Arial", 16, "bold")
            fontB = ("Arial", 14)
            bC = "#f0f0f0"

            #Background color
            com.configure(bg=bC)

            today = date.today()

            #Displays Date and score on test with GUI
            tk.Label(com, text = (f"On {today}"), font = fontL, bg=bC).pack(pady=5)
            tk.Label(com, text = f"You got {answer} on the test.", font = fontL, bg = bC).pack(pady=15)

            #making it look fancy
            tk.Button(com, text = "done", command = lambda: com.destroy(), font = fontL, bg = "#007BFF", activebackground = "#0056b3", activeforeground = "white", relief = "raised", bd = 3).pack(pady=10)
            tk.Button(com, text = "Try again", command = lambda: TryAgain(True, com), font = fontL, bg = "#007BFF", activebackground = "#0056b3", activeforeground = "white", relief = "raised", bd = 3).pack(pady=10)

            tk.mainloop()

        #Checks to makes sure there is somehow no index error and runs gives a chance to try again
        except IndexError:
            ncom = tk.Tk()
            ncom.title("Incomplete")

            fontL = ("Arial", 16, "bold")
            fontB = ("Arial", 14)
            bC = "#f0f0f0"

            ncom.configure(bg=bC)

            tk.Label(ncom, text = "The test was incomplete would you like to try it again?", font = fontL, bg=bC).pack(pady=20)

            tk.Button(ncom, text = "Try again", command = lambda: TryAgain(True, ncom), font = fontB, bg = "#007BFF", activebackground = "#0056b3", activeforeground = "white", relief = "raised", bd = 3).pack(pady=10)

            tk.mainloop()



#Program runner, allows question to be read from questions.csv file properly
#This also runs question.run for each question
def TryAgain(reset = False, win =None):

    #Checks to make sure a previous window is still not up
    if win != None:
        win.destroy()

    #Iteriates through question.csv to get questions, options, and answers into a Question object
    with open("question.csv", "r") as csvfile:
        csvreader = csv.DictReader(csvfile)
        num = 0
        for d in csvreader:
            num+=1
            question = Question(
                question=d["questionText"],
                opt1 = d["option1"],
                opt2 = d["option2"],
                opt3 = d["option3"],
                opt4 = d["option4"],
                answer =d["correctAnswer"],
                num = num
            )
            #Makes sure that a previous objects values will not mess with this objects values
            if reset:
                question.run(question,True)
                reset = False

            else:
                question.run(question)
        #Gets score
        question.Scores()

#To intially Start the program and give a nice GUI
def Start():
    
    #Creates window
    win = tk.Tk()
    win.title("Start")
    win.geometry("400x200")

    #Fonts and color
    fontL = ("Arial", 16, "bold")
    fontB = ("Arial", 14)
    bC = "#f0f0f0"

    #Background color
    win.configure(bg=bC)

    #Text for GUI
    tk.Label(win, text = "Do you want to take this quiz?", font = fontL, bg=bC).pack(pady=5)

    #Buttons determining wether the program is even run or not
    tk.Button(win, text = "Take the test", command = lambda: TryAgain(True,win), font = fontB, bg = "#007BFF", activebackground = "#0056b3", activeforeground = "white", relief = "raised", bd = 3).pack(pady=10)
    tk.Button(win, text = "Maybe Later", command = lambda: win.destroy(), font = fontB, bg = "#007BFF", activebackground = "#0056b3", activeforeground = "white", relief = "raised", bd = 3).pack(pady=10)


    tk.mainloop()

Start()