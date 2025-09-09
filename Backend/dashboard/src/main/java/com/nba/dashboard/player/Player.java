package com.nba.dashboard.player;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "player_season")
@Data
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // General info
    @Column(name = "season")
    private int season;

    @Column(name = "player")
    private String player;

    @Column(name = "player_id")
    private String playerId;

    @Column(name = "age")
    private float age;

    @Column(name = "team")
    private String teamCode;

    @Column(name = "pos")
    private String position;

    @Column(name = "games")
    private int games;

    @Column(name = "games_started")
    private int gamesStarted;

    @Column(name = "minutes")
    private int minutes;

    // Shooting
    @Column(name = "fg")
    private int fieldGoalsMade;

    @Column(name = "fga")
    private int fieldGoalsAttempted;

    @Column(name = "fg_pct")
    private float fieldGoalPct;

    @Column(name = "three_p")
    private int threePointMade;

    @Column(name = "three_pa")
    private int threePointAttempted;

    @Column(name = "three_pct")
    private float threePointPct;

    @Column(name = "two_p")
    private int twoPointMade;

    @Column(name = "two_pa")
    private int twoPointAttempted;

    @Column(name = "two_pct")
    private float twoPointPct;

    @Column(name = "efg_pct")
    private float effectiveFgPct;

    @Column(name = "ft")
    private int freeThrowsMade;

    @Column(name = "fta")
    private int freeThrowsAttempted;

    @Column(name = "ft_pct")
    private float freeThrowPct;

    // Box score totals
    @Column(name = "orb")
    private int offensiveRebounds;

    @Column(name = "drb")
    private int defensiveRebounds;

    @Column(name = "trb")
    private int totalRebounds;

    @Column(name = "ast")
    private int assists;

    @Column(name = "stl")
    private int steals;

    @Column(name = "blk")
    private int blocks;

    @Column(name = "tov")
    private int turnovers;

    @Column(name = "pf")
    private int personalFouls;

    @Column(name = "pts")
    private int points;

    @Column(name = "trp_dbl")
    private int tripleDoubles;

    // Per-game averages
    @Column(name = "mpg")
    private float minutesPerGame;

    @Column(name = "fpg")
    private float fieldGoalsPerGame;

    @Column(name = "fapg")
    private float fieldGoalsAttemptedPerGame;

    @Column(name = "three_pg")
    private float threesMadePerGame;

    @Column(name = "three_apg")
    private float threesAttemptedPerGame;

    @Column(name = "two_pg")
    private float twosMadePerGame;

    @Column(name = "two_apg")
    private float twosAttemptedPerGame;

    @Column(name = "ftpg")
    private float freeThrowsMadePerGame;

    @Column(name = "ftapg")
    private float freeThrowsAttemptedPerGame;

    @Column(name = "orbpg")
    private float offensiveReboundsPerGame;

    @Column(name = "drbpg")
    private float defensiveReboundsPerGame;

    @Column(name = "trbpg")
    private float totalReboundsPerGame;

    @Column(name = "astpg")
    private float assistsPerGame;

    @Column(name = "stlpg")
    private float stealsPerGame;

    @Column(name = "blkpg")
    private float blocksPerGame;

    @Column(name = "tovpg")
    private float turnoversPerGame;

    @Column(name = "pfpg")
    private float personalFoulsPerGame;

    @Column(name = "ppg")
    private float pointsPerGame;
}