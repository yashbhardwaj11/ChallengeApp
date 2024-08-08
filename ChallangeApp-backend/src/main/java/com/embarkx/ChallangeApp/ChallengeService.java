package com.embarkx.ChallangeApp;

import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ChallengeService {
    ChallengeRepository challengeRepository;

    public ChallengeService(ChallengeRepository challengeRepository){
        this.challengeRepository = challengeRepository;
    }

    public List<Challenge> getChallenges() {
        return challengeRepository.findAll();
    }

    public Boolean addChallenge(Challenge challenge) {
        if (challenge != null) {
            challengeRepository.save(challenge);
            return true;
        } else {
            return false;
        }
    }

    public List<Challenge> getChallengesByMonth(String month) {
        if (month == null || month.isEmpty()) {
            return Collections.emptyList();
        }
        return challengeRepository.findByMonthIgnoreCase(month);
    }

    public boolean removeChallengeByID(Long id) {
        if (challengeRepository.existsById(id)) {
            challengeRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public boolean updateChallengeById(Long id, Challenge updatedChallenge) {
        Optional<Challenge> existingChallengeOpt = challengeRepository.findById(id);
        if (existingChallengeOpt.isEmpty()) {
            return false;
        }
        Challenge existingChallenge = existingChallengeOpt.get();
        if (updatedChallenge.getMonth() != null && !updatedChallenge.getMonth().isEmpty()) {
            existingChallenge.setMonth(updatedChallenge.getMonth());
        }
        if (updatedChallenge.getDescription() != null && !updatedChallenge.getDescription().isEmpty()) {
            existingChallenge.setDescription(updatedChallenge.getDescription());
        }
        challengeRepository.save(existingChallenge);
        return true;
    }


}
