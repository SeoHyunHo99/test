# list = [ 42, "hello world", True]
# print(list)

# print(input("값을 입력해주세요"))

# dinner = input("식사했나요?(y/n)")
# if dinner == "y":
#     print("맛있게드셨군요!")
# else:
#     print("식사하세요.")

# import random

# food = []
# while True:
#     ans = input("추가할 음식을 입력해주세요. 종료할 경우 stop을 입력해주세요.")
#     if ans == "stop":
#         num1 = len(food) - 1
#         num2 = input("몇 번 돌릴까요?")
#         for i in range(int(num2)):
#             roll = random.randrange(0, num1)
#             print("랜덤으로 먹을 것 추천!", food[roll])
#         break
#     else:
#         food.append(ans)
#         print(food, "가 입력되었습니다.")

import requests
from bs4 import BeautifulSoup

url = "http://naver.com"
response = requests.get(url)
soup = BeautifulSoup(response.content,"html.parser")
print(soup.h1.span.string)