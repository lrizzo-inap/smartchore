{
  user_id: String,
  type: 'kid'|'parent',
  xp: {
    balance: Number,
    lifetime_earned: Number,
    last_updated: Date
  },
  privileges: {
    can_approve_chores: Boolean,
    max_xp_transfer: Number
  },
  preferences: {
    theme: String,
    chore_notification_time: "18:00"
  }
}
