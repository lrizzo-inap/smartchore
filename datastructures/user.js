{
  user_id: String,
  type: 'kid'|'parent',
  avatar: {
    emoji: "🦊",       // From predefined set
    color: "#FF8C00"   // Orange for fox
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
