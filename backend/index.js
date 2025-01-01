const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const secureRoutes = require('./routes/secure');

app.use('/api/secure', secureRoutes);

app.use('/api/auth', authRoutes);

connectDB();
