package com
{

	import com.ludus.Player;
	import com.ludus.stuffs.Hands;
	import com.managers.CombatManager;
	import com.managers.SoundManager;
	import flash.display.MovieClip;
	import flash.utils.getQualifiedClassName;
	
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	/**
	/*
	 * Disclaimer:
	 * This code is the intellectual property of its author (Gianluigi BEUZARD).
	 * All rights are reserved, and the author retains the exclusive right
	 * to use, modify, and exploit this code commercially.
	 * Unauthorized reproduction, or distribution of this code for commercial purpose is strictly prohibited.
	 */
	 */
	public class Game extends Sprite
	{
		public function Game() {
			
			Global.GAME = this; this.initGame();
			
			// [Ø] TODEL
			Global.TESTING = new Testing();
			// [Ø] END OF TODEL
			
			// debug msg intro
			Global.debug_this("This is Beta version of IIB");
			Global.SOUNDMANAGER.playSound('melodie_IIB_flute',3);
			
		}
		
		public function reset()
		{
			Global.ROOT.getChildByName('pan_inventaire').visible = false;
		}
		
		public function initGame() {
			
			Global.numLevel = 1; // to check
			Global.PLAYER = new Player();
			Global.COMBATMANAGER = new CombatManager();
			Global.SOUNDMANAGER = new SoundManager();
			
			// init correct values
			Global.HandWeapon = new Hands("left");
			if (Global.EVENEMENTS != null) {
				Global.score = 0;
				Global.EVENEMENTS.loadCreatures(Global.numLevel);
				Global.EVENEMENTS.loadStuffs(Global.numLevel);
			}
		}
		
	}
}