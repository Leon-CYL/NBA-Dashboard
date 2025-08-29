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

    @Column(name = "player_ref")
    private String playerRef;

    @Column(name = "age")
    private float age;

    @Column(name = "team_code")
    private String teamCode;

    @Column(name = "position")
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

    @Column(name = "triple_double")
    private int tripleDoubles;

    // Per-game averages
    @Column(name = "mpg")
    private float minutesPerGame;

    @Column(name = "fouls_pg")
    private float foulsPerGame;

    @Column(name = "fouls_drawn_pg")
    private float foulsDrawnPerGame;

    @Column(name = "three_pg")
    private float threesMadePerGame;

    @Column(name = "three_apg")
    private float threesAttemptedPerGame;

    @Column(name = "two_pg")
    private float twosMadePerGame;

    @Column(name = "two_apg")
    private float twosAttemptedPerGame;

    @Column(name = "ft_pg")
    private float freeThrowsMadePerGame;

    @Column(name = "fta_pg")
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

    @Column(name = "tov_pg")
    private float turnoversPerGame;

    @Column(name = "pfpg")
    private float personalFoulsPerGame;

    @Column(name = "pts_pg")
    private float pointsPerGame;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getSeason() {
        return season;
    }

    public void setSeason(int season) {
        this.season = season;
    }

    public String getPlayer() {
        return player;
    }

    public void setPlayer(String player) {
        this.player = player;
    }

    public String getPlayerRef() {
        return playerRef;
    }

    public void setPlayerRef(String playerRef) {
        this.playerRef = playerRef;
    }

    public float getAge() {
        return age;
    }

    public void setAge(float age) {
        this.age = age;
    }

    public String getTeamCode() {
        return teamCode;
    }

    public void setTeamCode(String teamCode) {
        this.teamCode = teamCode;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getGames() {
        return games;
    }

    public void setGames(int games) {
        this.games = games;
    }

    public int getGamesStarted() {
        return gamesStarted;
    }

    public void setGamesStarted(int gamesStarted) {
        this.gamesStarted = gamesStarted;
    }

    public int getMinutes() {
        return minutes;
    }

    public void setMinutes(int minutes) {
        this.minutes = minutes;
    }

    public int getFieldGoalsMade() {
        return fieldGoalsMade;
    }

    public void setFieldGoalsMade(int fieldGoalsMade) {
        this.fieldGoalsMade = fieldGoalsMade;
    }

    public int getFieldGoalsAttempted() {
        return fieldGoalsAttempted;
    }

    public void setFieldGoalsAttempted(int fieldGoalsAttempted) {
        this.fieldGoalsAttempted = fieldGoalsAttempted;
    }

    public float getFieldGoalPct() {
        return fieldGoalPct;
    }

    public void setFieldGoalPct(float fieldGoalPct) {
        this.fieldGoalPct = fieldGoalPct;
    }

    public int getThreePointMade() {
        return threePointMade;
    }

    public void setThreePointMade(int threePointMade) {
        this.threePointMade = threePointMade;
    }

    public int getThreePointAttempted() {
        return threePointAttempted;
    }

    public void setThreePointAttempted(int threePointAttempted) {
        this.threePointAttempted = threePointAttempted;
    }

    public float getThreePointPct() {
        return threePointPct;
    }

    public void setThreePointPct(float threePointPct) {
        this.threePointPct = threePointPct;
    }

    public int getTwoPointMade() {
        return twoPointMade;
    }

    public void setTwoPointMade(int twoPointMade) {
        this.twoPointMade = twoPointMade;
    }

    public int getTwoPointAttempted() {
        return twoPointAttempted;
    }

    public void setTwoPointAttempted(int twoPointAttempted) {
        this.twoPointAttempted = twoPointAttempted;
    }

    public float getTwoPointPct() {
        return twoPointPct;
    }

    public void setTwoPointPct(float twoPointPct) {
        this.twoPointPct = twoPointPct;
    }

    public float getEffectiveFgPct() {
        return effectiveFgPct;
    }

    public void setEffectiveFgPct(float effectiveFgPct) {
        this.effectiveFgPct = effectiveFgPct;
    }

    public int getFreeThrowsMade() {
        return freeThrowsMade;
    }

    public void setFreeThrowsMade(int freeThrowsMade) {
        this.freeThrowsMade = freeThrowsMade;
    }

    public int getFreeThrowsAttempted() {
        return freeThrowsAttempted;
    }

    public void setFreeThrowsAttempted(int freeThrowsAttempted) {
        this.freeThrowsAttempted = freeThrowsAttempted;
    }

    public float getFreeThrowPct() {
        return freeThrowPct;
    }

    public void setFreeThrowPct(float freeThrowPct) {
        this.freeThrowPct = freeThrowPct;
    }

    public int getOffensiveRebounds() {
        return offensiveRebounds;
    }

    public void setOffensiveRebounds(int offensiveRebounds) {
        this.offensiveRebounds = offensiveRebounds;
    }

    public int getDefensiveRebounds() {
        return defensiveRebounds;
    }

    public void setDefensiveRebounds(int defensiveRebounds) {
        this.defensiveRebounds = defensiveRebounds;
    }

    public int getTotalRebounds() {
        return totalRebounds;
    }

    public void setTotalRebounds(int totalRebounds) {
        this.totalRebounds = totalRebounds;
    }

    public int getAssists() {
        return assists;
    }

    public void setAssists(int assists) {
        this.assists = assists;
    }

    public int getSteals() {
        return steals;
    }

    public void setSteals(int steals) {
        this.steals = steals;
    }

    public int getBlocks() {
        return blocks;
    }

    public void setBlocks(int blocks) {
        this.blocks = blocks;
    }

    public int getTurnovers() {
        return turnovers;
    }

    public void setTurnovers(int turnovers) {
        this.turnovers = turnovers;
    }

    public int getPersonalFouls() {
        return personalFouls;
    }

    public void setPersonalFouls(int personalFouls) {
        this.personalFouls = personalFouls;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public int getTripleDoubles() {
        return tripleDoubles;
    }

    public void setTripleDoubles(int tripleDoubles) {
        this.tripleDoubles = tripleDoubles;
    }

    public float getMinutesPerGame() {
        return minutesPerGame;
    }

    public void setMinutesPerGame(float minutesPerGame) {
        this.minutesPerGame = minutesPerGame;
    }

    public float getFoulsPerGame() {
        return foulsPerGame;
    }

    public void setFoulsPerGame(float foulsPerGame) {
        this.foulsPerGame = foulsPerGame;
    }

    public float getFoulsDrawnPerGame() {
        return foulsDrawnPerGame;
    }

    public void setFoulsDrawnPerGame(float foulsDrawnPerGame) {
        this.foulsDrawnPerGame = foulsDrawnPerGame;
    }

    public float getThreesMadePerGame() {
        return threesMadePerGame;
    }

    public void setThreesMadePerGame(float threesMadePerGame) {
        this.threesMadePerGame = threesMadePerGame;
    }

    public float getThreesAttemptedPerGame() {
        return threesAttemptedPerGame;
    }

    public void setThreesAttemptedPerGame(float threesAttemptedPerGame) {
        this.threesAttemptedPerGame = threesAttemptedPerGame;
    }

    public float getTwosMadePerGame() {
        return twosMadePerGame;
    }

    public void setTwosMadePerGame(float twosMadePerGame) {
        this.twosMadePerGame = twosMadePerGame;
    }

    public float getTwosAttemptedPerGame() {
        return twosAttemptedPerGame;
    }

    public void setTwosAttemptedPerGame(float twosAttemptedPerGame) {
        this.twosAttemptedPerGame = twosAttemptedPerGame;
    }

    public float getFreeThrowsMadePerGame() {
        return freeThrowsMadePerGame;
    }

    public void setFreeThrowsMadePerGame(float freeThrowsMadePerGame) {
        this.freeThrowsMadePerGame = freeThrowsMadePerGame;
    }

    public float getFreeThrowsAttemptedPerGame() {
        return freeThrowsAttemptedPerGame;
    }

    public void setFreeThrowsAttemptedPerGame(float freeThrowsAttemptedPerGame) {
        this.freeThrowsAttemptedPerGame = freeThrowsAttemptedPerGame;
    }

    public float getOffensiveReboundsPerGame() {
        return offensiveReboundsPerGame;
    }

    public void setOffensiveReboundsPerGame(float offensiveReboundsPerGame) {
        this.offensiveReboundsPerGame = offensiveReboundsPerGame;
    }

    public float getDefensiveReboundsPerGame() {
        return defensiveReboundsPerGame;
    }

    public void setDefensiveReboundsPerGame(float defensiveReboundsPerGame) {
        this.defensiveReboundsPerGame = defensiveReboundsPerGame;
    }

    public float getTotalReboundsPerGame() {
        return totalReboundsPerGame;
    }

    public void setTotalReboundsPerGame(float totalReboundsPerGame) {
        this.totalReboundsPerGame = totalReboundsPerGame;
    }

    public float getAssistsPerGame() {
        return assistsPerGame;
    }

    public void setAssistsPerGame(float assistsPerGame) {
        this.assistsPerGame = assistsPerGame;
    }

    public float getStealsPerGame() {
        return stealsPerGame;
    }

    public void setStealsPerGame(float stealsPerGame) {
        this.stealsPerGame = stealsPerGame;
    }

    public float getBlocksPerGame() {
        return blocksPerGame;
    }

    public void setBlocksPerGame(float blocksPerGame) {
        this.blocksPerGame = blocksPerGame;
    }

    public float getTurnoversPerGame() {
        return turnoversPerGame;
    }

    public void setTurnoversPerGame(float turnoversPerGame) {
        this.turnoversPerGame = turnoversPerGame;
    }

    public float getPersonalFoulsPerGame() {
        return personalFoulsPerGame;
    }

    public void setPersonalFoulsPerGame(float personalFoulsPerGame) {
        this.personalFoulsPerGame = personalFoulsPerGame;
    }

    public float getPointsPerGame() {
        return pointsPerGame;
    }

    public void setPointsPerGame(float pointsPerGame) {
        this.pointsPerGame = pointsPerGame;
    }
}
