*** Settings ***
Library    SeleniumLibrary
Library    OperatingSystem

*** Variables ***
${BROWSER}         chrome
${URL}            http://localhost:4173
${TIMEOUT}        10s

*** Keywords ***
Open Sleepify
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Timeout    ${TIMEOUT}
    Go To    ${URL}

Close Sleepify
    Close All Browsers