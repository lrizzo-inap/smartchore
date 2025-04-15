{
  household_id: String,
  members: [{
    user_id: String,
    role: 'primary_parent'|'child'|'guardian'
  }],
  policies: {
    xp_earning_rules: {
      base_multiplier: Number,
      streak_bonus: Number
    },
    chore_defaults: {
      approval_required: Boolean,
      late_penalty: Number
    }
  }
}
