# <h1 align="center">Finterest ![WebsiteLogo-1-1 (2)](https://user-images.githubusercontent.com/85440675/194927739-00685484-0dd3-443d-903b-2d6ea74217cf.png)</h1> 

Objective
As several gaps were found in the market survey related to personal and professional, the main objective of the project was intended as the creation of a multi-functional, yet simple to use personal financial planner catering to every individual’s needs.

Scope of Project

The scope of the financial planner can be estimated in the form of three key estimations. These include fundamentally the project deliverables, or the features and functionality of the website, the project timeline and the work breakdown structure.
Project Deliverables:
1. Goal planner
2. Portfolio Diversification Module
3. SIP Calculator
4. Expense Management and Asset Analysis Module

![Screenshot (1071)](https://user-images.githubusercontent.com/85440675/194923986-2bcfa4ed-95e6-4a67-87d7-1acb796d16dc.png)


I) Portfolio Diversification

The functionality of portfolio diversification is provided to implement the process of investing your money in different asset classes and securities in order to minimize the overall risk of the portfolio.
To increase the personalized aspect of the financial planner, the module also takes into account the risk profile of each individual user, in the form of preference or focus (expressed as percentages) that the user wants to give to 5 different categories of financial planning, namely:
a) Long term personal and professional goals
b) Short term personal and professional goals
c) Security Funds and Emergency Planning
d) Volatile Investments for short-term gains
e) Low-Risk Investment for continuous returns


![Screenshot (1072)](https://user-images.githubusercontent.com/85440675/194923792-c1d672fe-8688-4779-bb0b-7188790deb57.png)


II) Goal Planning
Financial goal-planning refers to setting financial goals and developing plans to achieve them. The module implemented in the website takes into account a broad classification of goals based on their expected time frame into 3 categories:
a) Short Term Goals
b) Medium Term Goals
c) Long Term Goals

![Screenshot (1073)](https://user-images.githubusercontent.com/85440675/194929287-7adcec58-2843-48b5-bc17-422aa694b092.png)


III) SIP Calculator
A Systematic Investment Plan (SIP) is an investment tool which allows the investor to invest a fixed amount at regular intervals in a Mutual Fund scheme. SIP works by investing a fixed amount at a defined frequency.


The Front-End is implemented using HTML to build the skeleton of website and CSS to beautify the pages and JS to make pages interactive and AJAX is used for Multi-Step form. With the help of the Mulit-Step Form only information details are fetched from the user for generating the report.

The data fetched from the webpage is stored on the cloud for further processing and storage. This is achieved by interfacing the webpage with google sheets via a predefined google form .All the calculations required for generating the output values are performed automatically as each column has been defined with a specific formula. The report generated is customized for each client using a template report having placeholders.Using the Appscript of the concerned google sheet , a function is written to populate the template report with values for the recently inserted record. Also a button is created on the sheet to "Generate Pdf" which when clicked triggers the function defined in the AppScript. The report pdf is then mailed to the client.

