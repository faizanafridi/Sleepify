*** Settings ***
Documentation    Test suite for Sleepify login functionality
Resource         ../resources/login_keywords.robot
Resource         ../test_data/login_data.robot
Test Setup      Open Sleepify
Test Teardown   Close Sleepify

*** Test Cases ***

Invalid Login Test
    [Documentation]    Test login with invalid credentials
    Switch To Login Form
    Input Login Credentials    ${INVALID_EMAIL}    ${INVALID_PASSWORD}
    Click Submit Button
    Sleep  2s
    Verify Error Message    Please Enter Valid Credentials!
Valid Registration Test
    [Documentation]    Test registration with valid details
    Switch To Login Form
    Sleep  1s
    Click Register Button
    Sleep  1s
    ${RANDOM_EMAIL}=    Evaluate    'user_' + __import__('uuid').uuid4().hex[:6] + '@test.com'
    Set Global Variable    ${EMAIL}    ${RANDOM_EMAIL}
    Input Registration Details    ${VALID_NAME}   ${RANDOM_EMAIL}  ${VALID_PASSWORD}
    Click Submit Button
    Sleep  5s
    Verify Successful Navigation To Home
Valid Login Test
    [Documentation]    Test login with valid credentials
    Switch To Login Form
    Input Login Credentials    ${EMAIL}     ${VALID_PASSWORD}
    Click Submit Button
    Sleep  2s
    Verify Successful Navigation To Home


Invalid Registration Test
    [Documentation]    Test registration with invalid details
    Switch To Login Form
    Click Register Button
    Input Registration Details    ${INVALID_NAME}    ${INVALID_EMAIL}    ${INVALID_PASSWORD}
    Click Submit Button
    Sleep  2s
    Verify Error Message    Enter Valid Information Please!

Switch Between Login And Register Forms
    [Documentation]    Test switching between login and register forms
    Switch To Login Form
    Click Register Button
    Sleep  1s
    Element Should Be Visible    ${REGISTER_NAME_INPUT}
    Click Sigin Button
    Sleep  1s
    Element Should Not Be Visible    ${REGISTER_NAME_INPUT} 