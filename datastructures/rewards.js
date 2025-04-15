{
  reward_id: String,
  name: String,
  description: String,
  cost: {
    xp: Number,
    cooldown_hours: Number
  },
  inventory: {
    stock: Number,       // -1 for unlimited
    claims_this_week: Number
  },
  restrictions: {
    min_level: Number,
    max_per_user: Number
  },
  fulfillment: {
    type: 'automatic'|'parent_approval',
    instructions: String // "Show this QR code to Mom"
  }
}
