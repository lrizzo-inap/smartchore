{
  // ===== CORE IDENTIFIERS =====
  chore_id: String,                   // UUIDv4
  parent_chore_id: String,            // Self-referential for recurrences
  previous_instance_id: String,        // For tracking chore lineage
  version: Number,                    // Incremented on edits
  
  // ===== CONTENT & METADATA =====
  name: String,
  description: String,
  icon: String,                       // emoji/FontAwesome/URL
  media: {
    instructions: [String],            // Image/Video URLs
    completion_proof: {                // Kid-submitted
      photos: [String],
      audio: String
    }
  },
  
  // ===== LIFE CYCLE STATE =====
  status: 'new'|'submitted'|'approval_pending'|'completed'|
          'denied_reset'|'denied_remove'|'expired'|
          'extended'|'snoozed',
  status_history: [{
    status: String,
    changed_by: String,               // user_id
    timestamp: Date,
    notes: String
  }],
  
  // ===== TIME MANAGEMENT =====
  availability: {
    active_window: {                  // Original timeframe
      start: Date,
      end: Date
    },
    grace_period: {                   // Extended time
      active: Boolean,
      ends_at: Date,
      extended_by: String,
      reason: String
    },
    preferred_completion: {           // Ideal times
      start_time: "08:00",            // HH:MM
      end_time: "20:00"
    }
  },
  
  // ===== RECURRENCE =====
  recurrence: {
    is_recurrent: Boolean,
    type: 'daily'|'weekly'|'fixed_occurrences',
    remaining_occurrences: Number,    // Countdown
    expiration_date: Date,            // Hard stop
    generation_rules: {
      carry_forward: [String],        // Attribute whitelist
      modifiers: {                    // Dynamic adjustments
        point_value: '+=5%'           // Example increment
      }
    }
  },
  
  // ===== REWARD/PENALTY =====
  xp_value: {
    base: Number,
    bonus: Number,                    // Streak bonuses etc.
    penalty: Number,                  // Deduction if expired
    awarded: Number                   // Actual granted amount
  },
  
  // ===== ASSIGNMENT & APPROVAL =====
  assigned_to: [String],              // Kid user_ids
  approvers: [String],                // Parent user_ids
  completion: {
    completed_by: String,             // Kid user_id
    completed_at: Date,
    approved_by: String,              // Parent user_id
    approval_notes: String
  },
  denial_details: {                   // When status ∈ denied_*
    denied_by: String,
    reason: String,
    contact_method: String,           // "Talk to Dad after school"
    dispute_deadline: Date
  },
  
  // ===== SNOOZE CONTROL =====
  snooze_settings: {
    active: Boolean,
    until: Date,
    reason: 'vacation'|'illness'|'other',
    custom_reason: String,
    initiated_by: String              // user_id
  },
  
  // ===== UI STATE =====
  ui: {
    highlight: 'red'|'orange'|'green'|'blue',
    badge_text: String,               // "+10 XP!", "Paused"
    urgency: 'low'|'medium'|'high',
    animation_queue: [String]         // "celebrate", "remind"
  },
  
  // ===== AUDIT & TIMESTAMPS =====
  meta: {
    created_by: String,
    created_at: Date,
    updated_by: String,
    updated_at: Date,
    deleted_by: String,               // Soft delete
    deleted_at: Date
  }
}
