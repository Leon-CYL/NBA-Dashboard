package com.nba.dashboard.player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;


// Business logic for the Player Database
@Service
public class PlayerService {
    @Autowired
    private PlayerRepository playerRepository;

    /**
     * @return All NBA players in different season
     * */
    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }


    /**
     * @param playerId String
     *
     * @return A Player with different season year base on the player's playerId
     * */
    public List<Player> getPlayer(String playerId) {
        // Can replace stream with parallelStream for parallel filtering
        return playerRepository.findAll()
                .stream()
                .filter(player -> playerId.equals(player.getPlayer_id()))
                .collect(Collectors.toList());
    }

    /**
     * @param name String
     *
     * @return A Player with different season year base on the player's name
     * */
    public List<Player> getPlayerByName(String name) {
        return playerRepository.findAll()
                .stream()
                .filter(player -> name.equals(player.getName()))
                .collect(Collectors.toList());
    }

    /**
     * @param name String
     * @param playerId String
     *
     * @return A Player with different season year base on the player's name
     * */
    public List<Player> getPlayerByIdAndName(String name,String playerId) {
        return playerRepository.findAll()
                .stream()
                .filter(player -> name.equals(player.getName())
                        && playerId.equals(player.getPlayer_id()))
                .collect(Collectors.toList());
    }


    /**
     * @param team String
     * @param season int
     *
     * @return A list of Players of a team base on the season year and sorted by points
     * */
    public List<Player> getPlayerByTeamAndSeason(String team, int season) {
        return playerRepository.findAll()
                .stream()
                .filter(player -> team.equals(player.getTeam()) && season == player.getSeason())
                .sorted(Comparator.comparing(Player::getPointsPerGame).reversed())
                .collect(Collectors.toList());
    }


    // Function for Top 5 Dashboard

    /**
     * @param season int
     *
     * @return The top 5 players with the highest avg point per game
     * */
    public List<Player> getTop5PointsPerGame(int season) {
        return playerRepository.findBySeason(season)
                .stream()
                .sorted(Comparator.comparing(Player::getPointsPerGame).reversed())
                .collect(Collectors.toList());
    }


    /**
     * @param season int
     *
     * @return The top 5 players with the highest avg assist per game
     * */
    public List<Player> getTop5AssistsPerGame(int season) {
        return playerRepository.findBySeason(season)
                .stream()
                .sorted(Comparator.comparing(Player::getAssistsPerGame).reversed())
                .collect(Collectors.toList());
    }


    /**
     * @param season int
     *
     * @return The top 5 players with the highest avg rebound per game
     * */
    public List<Player> getTop5ReboundsPerGame(int season) {
        return playerRepository.findBySeason(season)
                .stream()
                .sorted(Comparator.comparing(Player::getTotalReboundsPerGame).reversed())
                .collect(Collectors.toList());
    }


    /**
     * @param season int
     *
     * @return The top 5 players with the highest avg steal per game
     * */
    public List<Player> getTop5StealsPerGame(int season) {
        return playerRepository.findBySeason(season)
                .stream()
                .sorted(Comparator.comparing(Player::getStealsPerGame).reversed())
                .collect(Collectors.toList());
    }


    /**
     * @param season int
     *
     * @return The top 5 players with the highest avg block per game
     * */
    public List<Player> getTop5BlocksPerGame(int season) {
        return playerRepository.findBySeason(season)
                .stream()
                .sorted(Comparator.comparing(Player::getBlocksPerGame).reversed())
                .collect(Collectors.toList());
    }

    /**
     * @param season int
     *
     * @return The top 5 players with the highest avg 3 point made per game
     * */
    public List<Player> getTop5ThreePointMadePerGame(int season) {
        return playerRepository.findBySeason(season)
                .stream()
                .sorted(Comparator.comparing(Player::getThreePointMadePerGame).reversed())
                .collect(Collectors.toList());
    }
}
