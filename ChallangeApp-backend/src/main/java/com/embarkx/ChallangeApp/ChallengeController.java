package com.embarkx.ChallangeApp;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/challenges")
public class ChallengeController {

    private final ChallengeService challengeService;
    public ChallengeController(ChallengeService challengeService){
        this.challengeService = challengeService;
    }

    @GetMapping
    public ResponseEntity<List<Challenge>> getChallenges(){
        return ResponseEntity.ok(challengeService.getChallenges());
    }

    @PostMapping
    public ResponseEntity<String> addChallenge(@RequestBody Challenge challenge){
        return new ResponseEntity<String>(challengeService.addChallenge(challenge) ? "Challenge Created" : "Something went wrong" , HttpStatus.CREATED);
    }

    @GetMapping("/{month}")
    public ResponseEntity<List<Challenge>> getChallengeByMonth(@PathVariable String month){
        return ResponseEntity.ok(challengeService.getChallengesByMonth(month));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteChallengeByID(@PathVariable Long id){
        boolean isDeleted = challengeService.removeChallengeByID(id);
        if (isDeleted)
            return ResponseEntity.ok("Deleted Successfully");
        else
            return new ResponseEntity<>("Something went wrong", HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updatedChallengeByID(@PathVariable Long id, @RequestBody Challenge challenge){
        boolean isUpdated = challengeService.updateChallengeById(id,challenge);
        if (isUpdated)
            return ResponseEntity.ok("Updated Successfully");
        else
            return new ResponseEntity<>("Something went wrong", HttpStatus.NOT_FOUND);
    }



}
