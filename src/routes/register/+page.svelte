<script>

</script>

<main>
    <h1>Register</h1>
    <form action="register" method="POST">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" required>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Password" required>
        <label for="password_confirmation">Password Confirmation</label>
        <input type="password" name="password_confirmation" id="password_confirmation" placeholder="Password Confirmation" required>
        <button type="submit">Register</button>
    </form>
    <a href="/login">Login</a>

</main>