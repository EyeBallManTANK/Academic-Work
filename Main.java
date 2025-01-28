import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class Main{  
    //Sets a satic arraylist allowing it to keep previous scenes
    //Could have done similar with Random and Scanner method but to late now
    static ArrayList<Integer> visitedScenes = new ArrayList<>();
    static int kills;

    public static int getRandomNum(int min, int max){
        return (int) (Math.random()* (max-min)) + min;
    }

    public static void main(String[] args) {
        //calls introduction method when code is started first time
        //everything else is self sufficent after that
    Introduction();

    }

 
 //Makes life easier for yes and no checks
    static boolean YesNo(){
        Scanner scan = new Scanner(System.in);

        boolean check = true;
        String input = scan.nextLine();
     //checks to see if they said yes or no and if not keep making them do it until that
        while(check){
            if(input.equalsIgnoreCase("yes")){
                return true;

            }else if(input.equalsIgnoreCase("no")){
                return false;

            }else{
                System.out.println("yes or no");
                input = scan.nextLine();

            }
        }
        //Just here because it demands it, but unneeded
        return true;
        
    }

 //Introduction scene to introuduce player and asks for tutorial
    static void Introduction(){
        Scanner scan = new Scanner(System.in);

        //Resets scenes
        Movement(1, true);

        System.out.println("Welcome to my Text-Based Adventure Game!");
        System.out.print("Pleasse enter your name: ");
        String Pname = scan.nextLine();

        System.out.println("Hello "+ Pname +". Would you like a tutorial? (yes/no)");
        boolean tut = YesNo();

        //Makes sure that the player input is valid and determines if they want or do not want a tutorial
        if(tut){
            System.out.println("Great here is an example of a Fight with no consequences.");
            Fighting(50,100,true);
        }else{
            System.out.println("Alright enjoy");
            Movement(100);
        }
    }


 //Make life easier so true does not have to be written everytime to call this function
    static void Fighting(int MonsterMax, int PlayerMax){
        Fighting(MonsterMax, PlayerMax, false);
    }
 
 //Fighting function to control fighting scenes
    static void Fighting(int MonsterMax, int PlayerMax,boolean tut){
        
        //defining things and setting scaner and random
        Scanner scan = new Scanner(System.in);
        Random random = new Random();
        boolean defend = false;

      //makes player aware
        System.out.println("A wild monster appears with " + MonsterMax + " health!");

        //Start of vital while loop which keeps fight going until either play wins or loses
        while(MonsterMax > 0 && PlayerMax > 0){
            //Makes player aware of health and what they are able to do
            System.out.println("Your health: " + PlayerMax);
            System.out.println("Monster health: "+ MonsterMax);
            System.out.println("Choose an action: attack defend, or flee");
            String action;
            action = scan.nextLine();


            int randomDamage;
            boolean aCheck = true;

         //This does the action that the player wants to do and also makes sure input is proper
            while(aCheck){
                switch (action) {
                    case "attack":
                        //Player does random amount of damage to monster and prints output
                        randomDamage = getRandomNum(10,20);
                        System.out.println("You attaack the monster for "+ randomDamage + " damage!");
                        MonsterMax -= randomDamage;
                        aCheck = false;
                        break;

                    case "defend":
                        System.out.println("You defend and will take less damage next turn.");
                        defend = true;
                        aCheck = false;
                        break;

                    case "flee":
                        System.out.println("You attempt to flee...");
                        if (getRandomNum(1,3) == 1){
                            System.out.println("You successfully escaped");
                            Movement(PlayerMax);

                        }else{
                            System.out.println("You failed to escape");
                        }
                        aCheck = false;
                        break;

                    default:
                    //Makes sure input is valid
                    System.out.println("Choose an action: attack, defend or flee");
                    action = scan.nextLine();
                        break;
                }
            }
         //Makes sure monster is not dead before it can attack
            if (MonsterMax > 0){
                int monsterDamage = getRandomNum(5,15);
            //Questions if defend is active or not and does damage depending on
                if(defend == true){
                    monsterDamage -= monsterDamage/2;
                    System.out.println("You were ready for the attack but the monster still attacks you for "+ monsterDamage +" damage!");
                    PlayerMax -= monsterDamage;
                    defend = false;

                }else{
                    System.out.println("The monster attacks you for "+ monsterDamage +" damage!");
                    PlayerMax -= monsterDamage;

                }
            }
            kills +=1;
        }
        if(tut == false){
            if(PlayerMax <= 0){
            //Player loses game if no remaining health
                Finished(PlayerMax);
            }
        //end of while loop returns players remaing health
        }else{
            Movement(100);
        }
         Movement(PlayerMax);
    }

 //So I do not have to worry about putting false everytime to call this method
    static void Movement(int PlayerMax){
        Movement(PlayerMax, false);
    }

 //Movment scene to transfer from scene to fighting scene or other scenes
    static void Movement(int PlayerMax, boolean reset){
        Scanner scan = new Scanner(System.in);
        Random random = new Random();
        
        //Makes sure that it is not just a reset
        if(reset == false){
            //Just some filler text to make the player feel more engaged, does not actually matter
            System.out.println("You are at a crossroads. Choose a direction: Forward, right, or left");
            String direction = scan.nextLine();

         //keeps track of amount of Scenarios and makes it easy to expand upon
            int totalScenarios = 7;
            int randomNum = getRandomNum(0,totalScenarios+1);
            int size = visitedScenes.size();

         //checks to see all scenarios have been played if not run again until not played scenario
            if(size == totalScenarios){
                Finished(PlayerMax);
                return;
            }else{
                while(visitedScenes.contains(randomNum)){
                    randomNum = getRandomNum(1, totalScenarios+1);

                }
            }

         
          //Adds scenarios to arraylist so they are not played again
            visitedScenes.add(randomNum);

            
         //stores all scenarios, easy to expand just add another case and increase totalScenarios by the amount of cases you added
            switch (randomNum){
                case 1:
                    System.out.println("You encounter a peaceful clearing. It seems as if you can see for miles");
                    Movement(PlayerMax);
                    break;
                
                case 2:
                    System.out.println("There is a sketchy bridge do you want to cross or find a different path(yes/no)");
                        boolean answer = YesNo();
                        if(answer){
                            System.out.println("You went across the bridge");
                            int rando = getRandomNum(1,2);

                            if(rando == 1){
                                System.out.println("You fell and encountered a monster");
                                Fighting(50, PlayerMax);

                            }else{
                                System.out.println("Bridge was sturdy enough to hold you, atleast this time");
                                Movement(PlayerMax);

                            }

                        }else{
                            System.out.println("You wander aimlessly");
                            Movement(PlayerMax);

                        }
                    break;

                case 3:
                    System.out.println("A scary monster jumps out of the bushes");
                    Fighting(30,PlayerMax);

                case 4:
                    System.out.println("There is a treasure chest siting in the distance, do you want to open it?(yes/no)");
                        answer = YesNo();
                        if(answer){
                            System.out.println("You find a meaty looking burger and eat it. You gain 10 HP");
                            PlayerMax += 10;
                            Movement(PlayerMax);
                        }else{
                            System.out.println("You carry on your way");
                            Movement(PlayerMax);
                        }
                    break;

                case 5:
                    System.out.println("IS THAT BATMAN... No its just a shadow");
                    Movement(PlayerMax);
                    break;

                case 6:
                    System.out.println("You see a shiny object on the ground in the distance. Do you pick it up?(yes/no)");
                        answer = YesNo();
                        if(answer){
                            System.out.println("IT IS AN EVIL GOLD TOOTH");
                            Fighting(20,PlayerMax);
                        }else{
                            System.out.println("You think you are not here for riches and move on");
                            Movement(PlayerMax);
                        }
                    break;

                case 7:
                    System.out.println("You see your mom in the distance, as you apporach her you reaise... ITS A GHOUL!");
                    Fighting(60,PlayerMax);

                default:
                    System.out.println("You wander aimlessly");
                    Movement(PlayerMax);
                    break;
            }



        }else{
         //Clears the arraylist for new game
            visitedScenes.clear();
            return;
        }
    }

 //Shows detail on if they won or lost the game and then asks if they wanna play again
    static void Finished(int PlayerMax){
        //checks to see if they won or lost and then says accordingly
        if(PlayerMax <= 0){
            System.out.println("You lost...You wanna try again?(yes/no)");
            boolean answer = YesNo();

            if(answer){
                System.out.println("AWESOME");
                Introduction();

            }else{
                System.out.println("Alright see ya later IG");

            }

        }else{
            System.out.println("CONGRATS YOU WON. You had "+ kills +" kills");
            System.out.println("Wanna play again?(yes/no)");
            boolean answer = YesNo();

            if(answer){
                System.out.println("AWESOME");
                Introduction();

            }else{
                System.out.println("Alright see ya later IG");

            }
        }
    }
}