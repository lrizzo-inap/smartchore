{
  reward_id: String,
  name: String,
  description: String,
  cost: {
    xp: Number,
    cooldown_days: Number // 0 = no cooldown
  },
  availability: {
    is_repeatable: Boolean,
    max_claims: Number,  // Null = unlimited
    assigned_to: [String] // Kid IDs (empty = all)
  },
  fulfillment: {
    type: "automatic"|"parent_approval",
    instructions: String
  },
  media: {
    icon: "🍦",
    preview_image: String // URL
  },
  meta: {
    created_by: String,  // Parent ID
    created_at: Date,
    archived: Boolean
  }
}
