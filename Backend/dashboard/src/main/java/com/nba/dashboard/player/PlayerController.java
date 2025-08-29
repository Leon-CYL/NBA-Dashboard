package com.nba.dashboard.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
