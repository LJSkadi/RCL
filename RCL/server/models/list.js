const mongoose = require('mongoose');
const { Schema } = mongoose;

const defaultName = function(){
    const defaultString = `New List from ${(new Date().getDate())}-${(new Date().getMonth())+1}-${(new Date().getFullYear())}`;
    return defaultString;
  };

const listSchema = new Schema({
    name: {type: String, default: defaultName},
    _owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    _components: [{ type: [Schema.Types.ObjectId], ref: 'Component' }],
    kind: {
        type: String,
        enum: ['BOOKMARK', 'HOST'],
    },
    status: { type: Boolean, default: false },
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        },
        usePushEach: true
    
    });

const List = mongoose.model('List', listSchema);
module.exports = List;
