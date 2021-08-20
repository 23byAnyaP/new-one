def fizzbuzz(n)
  (1..n).map do |i|
    if (i % 3).zero? && (i % 5).zero? then 'FizzBuzz'
    elsif (i % 3).zero? then               'Fizz'
    elsif (i % 5).zero? then               'Buzz'
    else                                   i
    end
  end
end
puts fizzbuzz(10)