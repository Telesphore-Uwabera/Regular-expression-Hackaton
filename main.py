from isbn_numbers import *
from formatted_dates import *
from jokes_regex_generator import *
from tv_episode_titles import *
from twiter_usernames import *
from movie_regex import *
from song_lyrics_regex import *



def user_input():
    print("""
    1. Movie Title\n2. Song Lyrics\n3. Twitter Usernames\n4. ISBN numbers\n5. Jokes
6. TV episode titles\n7. Weirdly Formatted Dates\n8. Hex Color Code\n9. IP address""")
    
    u_input = input("Pick a data type you want: ")

    return u_input



def user_match():
    string_match = input("Enter string to match: ")
    return string_match




if __name__ == "__main__":
    while True:
        try:
            choice = user_input()
            assert choice in "123456789"
            break
        except AssertionError:
            print("Invalid input. Please enter number between (1-9): ")
        except ValueError:
            print("Invalid input. Please enter number between (1-9): ")
    
    string = user_match()
    if choice == "1":
        movie_regex(string)
    elif choice == "2":
        song_regex(string)
    elif choice == "3":
        usernames_regex(string)
    elif choice == "4":
        isbn_regex(string)



        

