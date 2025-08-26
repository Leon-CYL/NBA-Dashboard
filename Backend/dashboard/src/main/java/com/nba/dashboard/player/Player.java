package com.nba.dashboard.player;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="player_season")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Player general info
    private int season;
    @Column(name = "player")
    private String name;
    private String player_id;
    private float age;
    private String team;
    private String pos;
    private int games;
    private int games_started;
    private int minutes;

    // Player's shooting
    private int fg; // fg -> # of field goal made
    private int fga; // fga -> # of field goal attempt
    private float fgp; // fgp -> field goal percentage
    private int twoPointMade;          // 2p -> # of 2-pointers made
    private int twoPointAttempted;     // 2pa -> # of 2-pointers attempted
    private float twoPointPercentage;  // 2p% -> 2-pointer percentage
    private int threePointMade;        // 3p -> # of 3-pointers made
    private int threePointAttempted;   // 3pa -> # of 3-pointers attempted
    private float threePointPercentage;// 3p% -> 3-pointer percentage
    private float efg; // efg% -> field goal efficiency
    private int ft; // ft -> Free Throws made
    private int fta; // fta -> Free Throw Attempted
    private float ftp; // ft% -> Free Throw Percentage

    // Totals (season stats)
    private int offensiveRebounds;     // orb
    private int defensiveRebounds;     // drb
    private int totalRebounds;         // trb
    private int assists;               // ast
    private int steals;                // stl
    private int blocks;                // blk
    private int turnovers;             // tov
    private int personalFouls;         // pf
    private int points;                // pts
    private int tripleDoubles;         // trp_dbl

    // Per-game averages
    private float minutesPerGame;      // mpg
    private float fieldGoalPerGame;        // fpg
    private float fieldGoalAttemptPerGame; // fapg
    private float threePointMadePerGame;     // 3pg
    private float threePointAttemptedPerGame;// 3apg
    private float twoPointMadePerGame;       // 2pg
    private float twoPointAttemptedPerGame;  // 2apg
    private float freeThrowsMadePerGame;     // ftpg
    private float freeThrowsAttemptedPerGame;// ftapg
    private float offensiveReboundsPerGame;  // orbpg
    private float defensiveReboundsPerGame;  // drbpg
    private float totalReboundsPerGame;      // trbpg
    private float assistsPerGame;            // astpg
    private float stealsPerGame;             // stlpg
    private float blocksPerGame;             // blkpg
    private float turnoversPerGame;          // tovpg
    private float personalFoulsPerGame;      // pfpg
    private float pointsPerGame;             // ppg
}
