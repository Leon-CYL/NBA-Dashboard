package com.nba.dashboard.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/nba")
public class PlayerController {
    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping()
    public List<Player> getPlayers(@RequestParam(required = false) String team,
            @RequestParam(required = false) String season,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String playerId,
            @RequestParam(required = false) String pos) {
        if (team != null && season != null) {
            return playerService.getPlayerByTeamAndSeason(team, Integer.parseInt(season));
        } else if (season != null && pos != null) {
            return playerService.getPlayerBySeasonAndPos(Integer.parseInt(season), pos);
        } else if (name != null && playerId != null) {
            return playerService.getPlayerByIdAndName(name, playerId);
        }

        return playerService.getPlayers();
    }

    @GetMapping("/leaderboard/points")
    public List<Player> getTopPointsLeaderboard(@RequestParam int season,
            @RequestParam(defaultValue = "5") int limit) {
        return playerService.getTop5PointsPerGame(season, limit);
    }

    @GetMapping("/leaderboard/assists")
    public List<Player> getTopAssistsLeaderboard(@RequestParam int season,
            @RequestParam(defaultValue = "5") int limit) {
        return playerService.getTop5AssistsPerGame(season, limit);
    }

    @GetMapping("/leaderboard/rebounds")
    public List<Player> getTopReboundsLeaderboard(@RequestParam int season,
            @RequestParam(defaultValue = "5") int limit) {
        return playerService.getTop5ReboundsPerGame(season, limit);
    }

    @GetMapping("/leaderboard/steals")
    public List<Player> getTopStealsLeaderboard(@RequestParam int season,
            @RequestParam(defaultValue = "5") int limit) {
        return playerService.getTop5StealsPerGame(season, limit);
    }

    @GetMapping("/leaderboard/blocks")
    public List<Player> getTopBlocksLeaderboard(@RequestParam int season,
            @RequestParam(defaultValue = "5") int limit) {
        return playerService.getTop5BlocksPerGame(season, limit);
    }

    @GetMapping("/leaderboard/threepoints")
    public List<Player> getTopThreePointsLeaderboard(@RequestParam int season,
            @RequestParam(defaultValue = "5") int limit) {
        return playerService.getTop5ThreePointMadePerGame(season, limit);
    }

    @GetMapping("/leaderboard/all")
    public Map<String, List<Player>> getAllLeaderboards(@RequestParam int season,
            @RequestParam(defaultValue = "5") int limit) {
        Map<String, List<Player>> leaderboards = new HashMap<>();

        leaderboards.put("points", playerService.getTop5PointsPerGame(season, limit));
        leaderboards.put("assists", playerService.getTop5AssistsPerGame(season, limit));
        leaderboards.put("rebounds", playerService.getTop5ReboundsPerGame(season, limit));
        leaderboards.put("steals", playerService.getTop5StealsPerGame(season, limit));
        leaderboards.put("blocks", playerService.getTop5BlocksPerGame(season, limit));
        leaderboards.put("threePoints", playerService.getTop5ThreePointMadePerGame(season, limit));

        return leaderboards;
    }
}
