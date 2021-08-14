//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Minigame {
    
    Student[] public arrStudent;
    
    struct Student {
        string _id;
        address _wallet;
    }
    
    event SM_fire_data(address _wallet, string _id);
    
    function register(string memory _id) public {
        Student memory newStudent = Student(_id, msg.sender);
        arrStudent.push(newStudent);
        emit SM_fire_data(msg.sender, _id);
    }
}