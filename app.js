package inkr

import java.io.File

fun main() {
    val fileName = "main"
    println("Processing ${fileName} in inkr")

    val file = File(fileName)
    if (file.exists()) {
        val lines = file.readLines()
        println("Read ${lines.size} lines")
    } else {
        println("File does not exist")
    }
}

# Additional Implementation 1760501530

# Code Update 1760501530-1824

# Code Update 1760501530-27655
